import { useDispatch } from "react-redux"
import { changeFilterCategory, changeFormCategory } from "../../store/actions/expense.actions"

const CategoryFilter = (props) => {

  const categories = ["Default", 'Food', 'Sport', 'Work', 'Fun'].sort()
  const dispatch = useDispatch()

  const categoryFilterHandler = (event) => {
    const value = event.target.value === '' ? undefined : event.target.value
    dispatch(changeFilterCategory(value))
  }

  const categoryFormHandler = (event) => {
    const value = event.target.value === '' ? undefined : event.target.value
    dispatch(changeFormCategory(value))
  }

  return (
    <>
      <select onChange={props.type === 'filter' ? categoryFilterHandler : categoryFormHandler}>
        {
          categories.map(category =>
            <option key={category} value={category === 'Default' ? '' : category}>{category}</option>
          )
        }
      </select>
    </>
  )
}

export default CategoryFilter
