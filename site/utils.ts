/**
 * Translate函数
 */
import { useLocale } from 'dumi';

export const getLang = () => {
  return useLocale().id;
};
