export type TimeHorizon = 'intraday' | 'swing' | 'structural';

export type AssetCognition = {
  assetCode: string;
  timeHorizon: TimeHorizon;
  directionalBias: 'bullish' | 'bearish' | 'neutral';
  confidenceTotal: number;
  contradictionScore: number;
  updatedAt: string;
};
