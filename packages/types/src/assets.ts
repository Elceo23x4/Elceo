export type AssetCategory = 'forex' | 'metal' | 'index' | 'crypto';

export type Asset = {
  code: string;
  label: string;
  category: AssetCategory;
};
