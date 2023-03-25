import { useDispatch } from "react-redux"
import { changeFilterCategory, changeFormCategory } from "../../store/actions/expense.actions"

const CategoryFilter = (props) => {

  const categories = ["Default", 'Food', 'Sport', 'Work', 'Fun'].sort()
  const dispatch = useDispatch()

  const categoryFilterHandler = (event) => {
    dispatch(changeFilterCategory(event.target.value))
  }

  const categoryFormHandler = (event) => {
    dispatch(changeFormCategory(event.target.value))
  }

  return (
    <>
      <select onChange={props.type === 'filter' ? categoryFilterHandler : categoryFormHandler}>
        {
          categories.map(category =>
            <option key={category} value={category}>{category}</option>
          )
        }
      </select>
    </>
  )
}

export default CategoryFilter
