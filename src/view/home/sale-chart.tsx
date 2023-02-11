import { STATUS_ENUM } from "@adapters/entity/status-enum";
import { useTokenSchedules } from "@hooks/useReceivedTokenSchedule";
import { useAppSelector } from "@hooks/useReduxToolKit";
import { getUserInfoSelector } from "@store/selector";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import moment from "moment";
import React from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    interaction: {
      intersect: false,
      axis: "x",
    },
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

// const labels = ["", "Month 1", "Month 2", "Month 3", "Month 4", "Month 5"];

const claimLineTemplate = {
  label: "Claimed",
  data: [0, 2000, 4000, 6000, undefined, undefined],
  borderColor: "rgb(53, 162, 235)",
  backgroundColor: "rgba(53, 162, 235, 0.5)",
  fill: false,
  stepped: true,
};
const lockLineTemplate = {
  label: "Locked",
  data: [undefined, undefined, undefined, 6000, 10000, 12000],
  borderColor: "rgb(104, 107, 105)",
  backgroundColor: "rgba(104, 107, 105, 0.5)",
  fill: false,
  stepped: true,
};
// const dataTemplate = {
//   labels,
//   datasets: [claimLineTemplate, lockLineTemplate],
// };

export function SaleChart() {
  const userData = useAppSelector(getUserInfoSelector);
  const shedules = useTokenSchedules(userData ? userData.id : null);

  const dataChart = React.useMemo(() => {
    const _labels = [""];
    const dataClaimed: any = [0];
    const dataLocked: any = [];
    const releaseStep = userData ? userData.vestingLogic : "M";
    const releaseStepMask = releaseStep.slice(-1);
    console.log("🚀 ~ file: sale-chart.tsx:108 ~ dataChart ~ rerender");
    if (shedules.scheduleData.length > 0) {
      let prevClaim = 0;
      let prevLock = 0;
      const startDate = moment(shedules.scheduleData[0].receivedDate);
      for (let index = 0; index < shedules.scheduleData.length; index++) {
        const element = shedules.scheduleData[index];
        prevLock += Number(element.amount);
        if (element.status === STATUS_ENUM.SETTLED) {
          prevClaim += Number(element.amount);
          dataClaimed.push(prevClaim);
          dataLocked.push(undefined);
        }
        if (element.status === STATUS_ENUM.PENDING) {
          if (index > 0 && shedules.scheduleData[index - 1].status === STATUS_ENUM.SETTLED) {
            dataLocked.push(prevClaim);
          }
          dataLocked.push(prevLock);
          dataClaimed.push(undefined);
        }
        const endDate = moment(element.receivedDate);
        let diffNum = 0;
        let defaultEndMaskLabel = "Month";
        switch (releaseStepMask) {
          case "d":
            diffNum = endDate.diff(startDate, "days");
            defaultEndMaskLabel = "Day";
            break;
          case "y":
            diffNum = endDate.diff(startDate, "years");
            defaultEndMaskLabel = "Year";
            break;
          default: //M
            diffNum = endDate.diff(startDate, "months");
            defaultEndMaskLabel = "Month";
            break;
        }
        _labels.push(`${defaultEndMaskLabel} ${diffNum > 0 ? diffNum : 1}`);
      }
    }
    const lineClaim = { ...claimLineTemplate, data: dataClaimed };
    const lineLocked = { ...lockLineTemplate, data: dataLocked };
    const newDataChart = { labels: _labels, datasets: [lineClaim, lineLocked] };
    return newDataChart;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shedules.scheduleData]);
  return <Line options={options} data={dataChart} />;
}
