import {useState, useRef, useEffect, } from "react"
import styles from './EditResource.module.css'
import { NavLink, useLocation } from "react-router-dom"

function EditResource(props) {
  const location = useLocation()
  const initialState = {
    ...location.state,
  }
  const [formData, setFormData] = useState(initialState)

  console.log(initialState)
  
  const [validForm, setValidForm] = useState(false)

  const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

  const formElement = useRef()

  useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

  const handleSubmit = evt => {
		evt.preventDefault()
		const form = {
			...formData,
		}
		props.handleUpdateResource(form)
	}

	return (
		<>
			<h1>Add Resource</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="title-input" className="form-label">
						Title (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="title-input"
						name="title"
						value={formData.title}
						onChange={handleChange}
						placeholder="Short Name of Resource"
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="category-input" className="form-label">
						Category (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="category-input"
						name="category"
						value={formData.category}
						onChange={handleChange}
						placeholder="Category of Resource"
						required
					/>
				</div>
        <div className="form-group mb-3">
					<label htmlFor="url-input" className="form-label">
						Url (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="url-input"
						name="url"
						value={formData.url}
						onChange={handleChange}
						placeholder="Link to Resource"
						required
					/>
				</div>
        <div className="form-group mb-3">
					<label htmlFor="url-input" className="form-label">
						Photo (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="photo-input"
						name="photo"
						value={formData.photo}
						onChange={handleChange}
						placeholder="Link to Resource Photo"
						required
					/>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className={styles.submitBtn}
            disabled={!validForm}
					>
						Save Resource
					</button>
          <NavLink 
            to="/resourcesList"
            className="btn btn-danger"
          >
            Cancel
          </NavLink>
				</div>
			</form>
		</>
	)
}

export default EditResource