import { Page } from "../components/Page";
import { Navbar } from "../components/Navbar";

import { tutorialStatusEnum, tutorialStatus } from "../../../lib";
import { pascalCaseToSentence } from "../utils/formatting";
import { useAppContext } from "../context/AppContext";
import { VideoModal } from "../components/VideoModal";
import { TutorialTab } from "../components/TutorialTab";

import {ActionTab} from "../components/ActionTab";

export const videoStatusOptions = tutorialStatusEnum.map((status) => ({
  value: status,
  label: pascalCaseToSentence(status),
}));

export function Dashboard() {
  const { showModal, selectedTab, setSelectedTab } = useAppContext();

  function activeTabClass(tab: tutorialStatus) {
    return isTabActive(tab) ? "is-active" : "";
  }

  function isTabActive(tab: tutorialStatus) {
    return tab === selectedTab;
  }

  return (
    <>
      <Navbar />
      <Page>
        <div className="tabs is-centered">
          <ul>
            {videoStatusOptions.map((tab) =>
            {
              // console.log("Tab:" + JSON.stringify(tab))
            return (
              <li key={tab.value} className={`tab ${activeTabClass(tab.value)}`} >
                <a href={`#/`} onClick={() => setSelectedTab(tab.value)}>
                  {tab.label}
                </a>
              </li>
            ) }
            
            )
          }
          </ul>
        </div>
        {videoStatusOptions.map( (tab) => {
          switch (tab.value) {
            case "action":
              console.log("Tab action:" + tab.value);
              return isTabActive(tab.value) && <ActionTab key={tab.value} tab={tab.value} />
            default:
              return isTabActive(tab.value) && <TutorialTab key={tab.value} tab={tab.value} />
          }
        }
        )}
      </Page>
      {showModal && <VideoModal />}
    </>
  );
}
