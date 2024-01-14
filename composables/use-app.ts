import { SORT_MODE, type FilterKey, type KeyValue } from '~/types';

export const useApp = (name = 'app') => {
  const title = useState('app-title', () => 'App');
  const titleSetting = useState('app-title-setting', () => 'App Setting');

  const setting = useState<KeyValue>('app-setting', () => {
    return {
      formatDate: 'dd/MM/yyyy',
    };
  });

  const loading = ref(false);
  const orderBy = useState<FilterKey>(`${name}-order-by`, () => {
    return { key: 'id', mode: SORT_MODE.ASC };
  });
  const limit = 10;
  const search = ref('');
  const page = ref(1);

  return {
    setting,
    title,
    titleSetting,
    loading,
    orderBy,
    limit,
    search,
    page,
  };
};
