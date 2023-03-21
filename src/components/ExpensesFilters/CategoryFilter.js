const CategoryFilter = (props) => {

  const categories = ['Food', 'Sport']

  return (
    <>
      <select>
        {
          categories.map(c =>
            <option value={c}>{c}</option>
          )
        }
      </select>
    </>
  )
}

export default CategoryFilter
