export const tutorialStatusEnum = [
  "bar",
  "sankey",
  "inProgress",
  "finished"
] as const;

export type tutorialStatus = typeof tutorialStatusEnum[number];

export interface Tutorial {
  id: number;
  youtubeUrl: string;
  title: string;
  progress: number;
  status: tutorialStatus;
}


export type actionStatus = typeof tutorialStatusEnum[number];

export interface iAction {
  tid: number;
  wid: number;
  date: Date;
  id: number;
  pid: number;
  aid: number;
  count: number;
  status: actionStatus;
}
