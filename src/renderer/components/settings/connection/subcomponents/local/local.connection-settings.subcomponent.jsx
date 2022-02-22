import { useState } from 'react';
import './local.connection-settings.styles.scss';

function LocalConnectionSettings() {
   const [port, setPort] = useState('');
   const [ip, setIp] = useState('');
   const [alertMessage, setAlertMessage] = useState('');

   const isIpValid = (ipAddress) => {
      const ipReg = new RegExp(/^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/);
      return ipReg.test(ipAddress);
   };

   const isPortValid = (portNumber) => {
      return !!portNumber && portNumber >= 0 && portNumber < 65535;
   };

   const validateIpChange = (e) => {
      let { value } = e.target;

      const backspaceAtDot = ip.endsWith('.') && value === ip.slice(0, -1);
      const endsWithTwoDots = value.slice(-2) === '..';

      if (backspaceAtDot || endsWithTwoDots) {
         value = value.slice(0, -1);
      }

      const ipPartRegEx = new RegExp(/^(25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)/);
      const ipParts = value.split('.');
      let isValid;

      if (ipParts.length > 4) {
         isValid = false;
      } else {
         isValid = ipParts.reduce(
            (bool, curr) => (curr && !ipPartRegEx.test(curr) ? false : bool),
            true
         );
      }

      if (isValid || value.length === 0) {
         const lastPart = ipParts[ipParts.length - 1];
         setIp(() => (ipParts.length < 4 && lastPart > 25 ? value + '.' : value));
      }
   };

   const validatePort = (e) => {
      const { value } = e.target;

      if (value === '' || isPortValid(value)) {
         setPort(value);
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setAlertMessage(JSON.stringify({ ip, port }, null, 2));
   };

   return (
      <div className="settings__connection-option__local">
         <form onSubmit={handleSubmit}>
            <div className="input-container">
               <label htmlFor="ip">IPv4 Address</label>
               <input
                  type="text"
                  id="ip"
                  onChange={validateIpChange}
                  value={ip}
                  className={ip && (isIpValid(ip) ? 'valid' : 'invalid')}
               />
            </div>

            <div className="input-container">
               <label htmlFor="port">Port Number</label>
               <input
                  type="number"
                  id="port"
                  onChange={validatePort}
                  value={port}
                  className={port && (isPortValid(port) ? 'valid' : 'invalid')}
               />
            </div>

            <input
               type="submit"
               value="Save"
               className="settings__connection-option__local-input--save"
               disabled={!isIpValid(ip) || !isPortValid(port)}
            />
            <pre>{alertMessage}</pre>
         </form>
      </div>
   );
}

export default LocalConnectionSettings;
