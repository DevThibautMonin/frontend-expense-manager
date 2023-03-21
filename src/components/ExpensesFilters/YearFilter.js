const YearFilter = (props) => {

  const yearFilterHandler = (event) => {
    const selectedYear = event.target.value
    props.onYearChange(selectedYear)
  }

  return (
    <>
      <select value={props.year} onChange={yearFilterHandler}>
        <option value='2026'>2026</option>
        <option value='2025'>2025</option>
        <option value='2024'>2024</option>
        <option value='2023'>2023</option>
        <option value='2022'>2022</option>
        <option value='2021'>2021</option>
        <option value='2020'>2020</option>
        <option value='2019'>2019</option>
        <option value='2018'>2018</option>
        <option value='2017'>2017</option>
      </select>
    </>
  )
}

export default YearFilter
