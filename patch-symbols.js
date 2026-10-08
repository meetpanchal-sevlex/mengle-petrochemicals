const fs = require('fs');

let data = fs.readFileSync('src/app/price-list/page.tsx', 'utf8');

const oldSymbols = `"symbolsGroups": [
          {
            "name": "Global Commodities",
            "originalName": "Commodities",
            "symbols": [
              { "name": "CME_MINI:QM1!", "displayName": "Crude Oil" },
              { "name": "NYMEX:NG1!", "displayName": "Natural Gas" },
              { "name": "NYMEX:RB1!", "displayName": "Gasoline" },
              { "name": "NYMEX:HO1!", "displayName": "Heating Oil" },
              { "name": "COMEX:GC1!", "displayName": "Gold" },
              { "name": "COMEX:SI1!", "displayName": "Silver" },
              { "name": "COMEX:HG1!", "displayName": "Copper" }
            ]
          }
        ]`;

const newSymbols = `"symbolsGroups": [
          {
            "name": "Global Commodities",
            "originalName": "Commodities",
            "symbols": [
              { "name": "TVC:USOIL", "displayName": "WTI Crude Oil" },
              { "name": "TVC:UKOIL", "displayName": "Brent Crude Oil" },
              { "name": "CAPITALCOM:NATURALGAS", "displayName": "Natural Gas" },
              { "name": "TVC:GOLD", "displayName": "Gold" },
              { "name": "TVC:SILVER", "displayName": "Silver" },
              { "name": "OANDA:XCUUSD", "displayName": "Copper" }
            ]
          }
        ]`;

data = data.replace(oldSymbols, newSymbols);

fs.writeFileSync('src/app/price-list/page.tsx', data);
console.log('Fixed TradingView restricted symbols');
