const YearFilter = (props) => {

  const yearFilterHandler = (event) => {
    const selectedYear = event.target.value
    props.onYearChange(selectedYear)
  }

  const years = ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'].reverse()

  return (
    <>
      <select value={props.year} onChange={yearFilterHandler}>
        {
          years.map(y =>
            <option value={y}>{y}</option>
          )
        }
      </select>
    </>
  )
}

export default YearFilter
