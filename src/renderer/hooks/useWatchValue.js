import { useEffect } from 'react';

export function useWatchValue(name, value) {
   useEffect(() => {
      console.log(`watcher invoked for ${name}`, value);
   }, [value, name]);
}
