import { useDispatch } from "react-redux"
import { changeFilterCategory, changeFormCategory } from "../../store/actions/expense.actions"

const CategoryFilter = (props) => {

  const categories = ["Food", "Sport", "Work", "Fun", "Miscellaneous", "Clothing"].sort()
  categories.unshift("Default")
  const dispatch = useDispatch()

  const categoryHandler = (event) => {
    const value = event.target.value === "" ? undefined : event.target.value
    if (props.type === "filter") {
      dispatch(changeFilterCategory(value))
    } else {
      dispatch(changeFormCategory(value))
    }
  }

  return (
    <select onChange={categoryHandler}>
      {
        categories.map(category =>
          <option key={category} value={category === "Default" ? "" : category}>{category}</option>
        )
      }
    </select>
  )
}

export default CategoryFilter
