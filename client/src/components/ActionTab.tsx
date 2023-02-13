import { Tutorial, tutorialStatus } from "../../../lib";
// import { trpc } from "../utils/trpc";
// import { TutorialCard } from "./TutorialCard";
import TopGrid from './TopGrid'
import  BarGraph from './BarGraph'

// const NUMBER_OF_COLUMNS = 2;

interface TutorialTabProps {
  tab: tutorialStatus;
}

const ActionTab = ({ tab }: TutorialTabProps) => {
  // const { data } = trpc.tutorial.getByStatus.useQuery({ status: tab });

  // const actions = trpc.action.list.useQuery();
  // console.log("Act tab:" + tab + ":", actions.data);

  // function chunkTutorials(data: Tutorial[], chunkSize: number) {
  //   const chunks = [];
  //   let i = 0;
  //   while (i < data.length) {
  //     chunks.push(data.slice(i, (i += chunkSize)));
  //   }
  //   return chunks;
  // }

  // if (!data) {
  //   return null;
  // }

        /* {chunkTutorials(data, NUMBER_OF_COLUMNS).map((row, index) => (
        <div key={index} className="columns">
          {row.map((tutorial) => (
            <div className="column">
              <TutorialCard tutorial={tutorial} />
            </div>
          ))}
          {row.length < NUMBER_OF_COLUMNS &&
            Array(NUMBER_OF_COLUMNS - row.length)
              .fill(null)
              .map((_, index) => <div className="column" key={index} />)}
        </div>
      ))} */

  return (
    <div className="columns">
      <div className="column">
        <TopGrid/>
        <BarGraph/>
      </div>
    </div>
  );
}

export { ActionTab }