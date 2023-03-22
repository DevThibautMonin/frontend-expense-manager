const CategoryFilter = (props) => {

  const categories = ['Default', 'Food', 'Sport', 'Work', 'Fun'].sort()

  const categoryChangeHandler = (event) => {
    props.onCategoryFilterChange(event.target.value)
  }

  return (
    <>
      <select onChange={categoryChangeHandler}>
        {
          categories.map(c =>
            <option key={c} value={c}>{c}</option>
          )
        }
      </select>
    </>
  )
}

export default CategoryFilter
