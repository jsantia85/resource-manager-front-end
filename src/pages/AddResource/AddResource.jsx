import {useState, useRef, useEffect, } from "react"
import styles from './AddResource.module.css'

function AddResource(props) {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    url: '',
    photo: '',
  })
  
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
			title: formData.title,
			category: formData.category,
			url: formData.url,
      photo: formData.photo,
		}
		props.handleAddResource(form)
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
						Add Post
					</button>
				</div>
			</form>
		</>
	)
}

export default AddResource