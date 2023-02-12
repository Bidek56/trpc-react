export type idata = {
    name: string,
    uv: number,
    pv: number,
    amt: number,
    time: number,
    channel: number,
    conversionTime: number,
    propositions: number
};

export type DataProps = {
    dataProp: idata[];
};