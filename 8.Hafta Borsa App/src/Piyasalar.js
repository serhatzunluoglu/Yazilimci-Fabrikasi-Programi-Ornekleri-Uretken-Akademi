import React, { useState, useEffect, useMemo } from "react";

function Piyasalar() {
  const [coins, setCoins] = useState([]);
  const fetchCoins = async () => {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      const data = await res.json();
      setCoins(data);
    } catch (e) {
      alert("Api Hatası");
    }
  };
  useEffect(() => {
    fetchCoins();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [sortConfig, setSortConfig] = useState(null);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedCoins = useMemo(() => {
    const sortableCoins = [...filteredCoins];
    if (sortConfig !== null) {
      sortableCoins.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableCoins;
  }, [filteredCoins, sortConfig]);

  const CoinTable = ({ coins }) => (
    <table id="coin-table">
      <thead>
        <tr>
          <th onClick={() => handleSort('name')}>
            Ad {sortConfig && sortConfig.key === 'name' && (
              sortConfig.direction === 'ascending' ? <span>&uarr;</span> : <span>&darr;</span>
            )}
          </th>
          <th onClick={() => handleSort('symbol')}>
            Sembol {sortConfig && sortConfig.key === 'symbol' && (
              sortConfig.direction === 'ascending' ? <span>&uarr;</span> : <span>&darr;</span>
            )}
          </th>
          <th onClick={() => handleSort('current_price')}>
            Fiyat {sortConfig && sortConfig.key === 'current_price' && (
              sortConfig.direction === 'ascending' ? <span>&uarr;</span> : <span>&darr;</span>
            )}
          </th>
          <th id="coin-change" onClick={() => handleSort('price_change_percentage_24h')}>
            Değişim {sortConfig && sortConfig.key === 'price_change_percentage_24h' && (
              sortConfig.direction === 'ascending' ? <span>&uarr;</span> : <span>&darr;</span>
            )}
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedCoins.map((coin) => (
          <tr key={coin.id}>
            <td>{coin.name}</td>
            <td>{coin.symbol.toUpperCase()}</td>
            <td>${coin.current_price}</td>
            <td  className="coin-change">{coin.price_change_percentage_24h}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Ara"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className='coin-table-sub'>
          <CoinTable coins={sortedCoins} />
        </div>
    </div>
  )
}

export default Piyasalar;