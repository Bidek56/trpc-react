import { iTutorial, tutorialStatus } from "../../../lib";
import { trpc } from "../utils/trpc";
import { TutorialCard } from "./TutorialCard";

const NUMBER_OF_COLUMNS = 2;

interface TutorialTabProps {
  tab: tutorialStatus;
}

export function TutorialTab({ tab }: TutorialTabProps) {
  const { isLoading, isError, data, error } = trpc.tutorial.getByStatus.useQuery({ status: tab });

  if (isLoading)
    return <div>Loading....</div>

  if (isError)
    return <span>Error: {error.message}</span>

  function chunkTutorials(data: iTutorial[], chunkSize: number) {
    const chunks = [];
    let i = 0;
    while (i < data.length) {
      chunks.push(data.slice(i, (i += chunkSize)));
    }
    return chunks;
  }

  // console.log("tab data:", data);

  if (!data) {
    return null;
  }
  return (
    <>
      {chunkTutorials(data, NUMBER_OF_COLUMNS).map((row, index) => (
        <div key={index} className="columns">
          {row.map((tutorial, key) => (
            <div className="column">
              <TutorialCard key={key} tutorial={tutorial} />
            </div>
          ))}
          {row.length < NUMBER_OF_COLUMNS &&
            Array(NUMBER_OF_COLUMNS - row.length)
              .fill(null)
              .map((_, index) => <div className="column" key={index} />)}
        </div>
      ))}
    </>
  );
}
