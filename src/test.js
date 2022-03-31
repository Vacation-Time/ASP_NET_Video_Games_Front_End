return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Publisher</th>
            <th>Year</th>
            <th>Rank</th>
            <th>Genre</th>
            <th>Platform</th>
            <th>North America Sales</th>
            <th>Europe Sales</th>
            <th>Japan Sales</th>
            <th>Other Sales</th>
            <th>Total Global Sales</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(entry => {
            return (
              <tr>
                <td>{entry.Name}</td>
              </tr>
            )
          })}

        </tbody>
      </table>
    </div>
  );