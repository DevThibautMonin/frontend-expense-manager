import { useDispatch } from "react-redux"
import { changeFilterCategory, changeFormCategory } from "../../store/actions/expense.actions"

const CategoryFilter = (props) => {

  const categories = ["Food", "Sport", "Work", "Fun", "Miscellaneous", "Clothing"].sort()
  categories.unshift("Default")
  const dispatch = useDispatch()

  const categoryHandler = (event) => {
    const value = event.target.value
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
          <option defaultValue="Default" key={category} value={category}>{category}</option>
        )
      }
    </select>
  )
}

export default CategoryFilter
