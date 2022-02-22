import { useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';

export const useSmoothScroll = (ref) => {
   useEffect(() => {
      const element = ref.current;

      Scrollbar.init(element, {
         damping: 0.1,
      });
   }, []);
};
