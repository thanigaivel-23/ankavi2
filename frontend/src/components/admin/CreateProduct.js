import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createNewProduct } from '../../actions/productAction'
import { clearError, clearProductCreated } from '../../slices/productSlice'
import toast from 'react-hot-toast'
import NavBar from '../layouts/NavBar'
import AdminNavbar from './AdminNavbar'
import MetaData from '../layouts/MetaData'

const CreateProduct = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [fabric, setFabric] = useState('')
    // const [washcare, setWashcare] = useState('')
    const [weight, setWeight] = useState('')
    const [zari, setZari] = useState('')
    const [stock, setStock] = useState('')
    // const [note, setNote] = useState('')
    const [category, setCategory] = useState('')
    const [video_link, setVideo_link] = useState('')
    const [images, setImages] = useState([])
    const [imagePerview, setImagePerview] = useState([])

    const imageHandler = (e) => {
        const files = Array.from(e.target.files)

        files.forEach((file) => {
            const reader = new FileReader()

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagePerview(oldArray => [...oldArray, reader.result])
                    setImages(oldArray => [...oldArray, file])
                }
            }

            reader.readAsDataURL(file)
        })
    }

    const { loading, isProductCreated, error } = useSelector(state => state.productState)

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', price)
        formData.append('description', description)
        formData.append('stock', stock)
        formData.append('zari', zari)
        // formData.append('note', note)
        formData.append('category', category)
        // formData.append('washcare', washcare)
        formData.append('weight', weight)
        formData.append('video_link', video_link)
        formData.append('fabric', fabric)
        images.forEach(image => {
            formData.append('images', image)
        })

        dispatch(createNewProduct(formData))

    }

    useEffect(() => {
        if (isProductCreated) {
            toast.success('Product Created Successfully')
            dispatch(clearProductCreated())
            navigate('/admin/products')
            return;
        }

        if (error) {
            toast.error(error)
            dispatch(clearError())
            return
        }

    }, [isProductCreated, error, dispatch, navigate])

    return (
        <>

            <MetaData title={'Ankavi Silks - Create Product'} />

            {/* nav bar */}
            <NavBar />

            {/*admin nav bar */}
            <AdminNavbar />

            {/*create product*/}
            <form onSubmit={submitHandler} className='md:tw-border-2 md:tw-w-[70%] lg:tw-w-[50%] md:tw-mx-auto md:tw-my-7'>

                <p className='tw-px-3 tw-py-3 tw-text-sm md:tw-text-xl tw-font-bold tw-text-gray-700 tw-bg-gray-100 md:tw-bg-white'>Create Product</p>

                {/* name */}
                <p className='tw-mx-3 tw-py-3 tw-text-sm md:tw-text-base tw-font-bold tw-text-gray-700 '>Name of the Product</p>

                <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Enter Product Name' className='tw-outline-none tw-border tw-rounded-sm tw-box-border tw-w-11/12 tw-mx-3 tw-mb-3 tw-px-3 tw-py-2 focus:tw-border-gray-700 placeholder:tw-text-sm' />

                {/* price */}
                <p className='tw-mx-3 tw-py-3 tw-text-sm md:tw-text-base tw-font-bold tw-text-gray-700 '>Price</p>

                <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" placeholder='Enter Product Price' className='tw-outline-none tw-border tw-rounded-sm tw-box-border tw-w-11/12 tw-mx-3 tw-mb-3 tw-px-3 tw-py-2 focus:tw-border-gray-700 placeholder:tw-text-sm' />

                {/* description */}
                <p className='tw-mx-3 tw-py-3 tw-text-sm md:tw-text-base tw-font-bold tw-text-gray-700 '>Description</p>

                <textarea onChange={(e) => setDescription(e.target.value)} value={description} cols="20" rows="6" placeholder='Description' className='tw-outline-none tw-border tw-rounded-sm tw-box-border tw-w-11/12 tw-mx-3 tw-mb-3 tw-px-3 tw-py-2 focus:tw-border-gray-700 placeholder:tw-text-sm'></textarea>


                <select onChange={(e) => setCategory(e.target.value)} name='category' value={category} className='tw-outline-none tw-border tw-rounded-sm tw-box-border tw-w-11/12 tw-mx-3 tw-mb-3 tw-px-3 tw-py-2 focus:tw-border-gray-700 placeholder:tw-text-sm'>
                    <option value='' disabled >Choose Category</option>
                    <option value="Traditional_Pure_Zari">Traditional Pure Zari</option>
                    <option value="Half_Fine">Half Fine</option>
                </select>

                <input onChange={(e) => setVideo_link(e.target.value)} value={video_link} type="text" placeholder='Video Link' className='tw-outline-none tw-border tw-rounded-sm tw-box-border tw-w-11/12 tw-mx-3 tw-mb-3 tw-px-3 tw-py-2 focus:tw-border-gray-700 placeholder:tw-text-sm' />

                <input onChange={(e) => setStock(e.target.value)} value={stock} type="number" placeholder='Stock' className='tw-outline-none tw-border tw-rounded-sm tw-box-border tw-w-11/12 tw-mx-3 tw-mb-3 tw-px-3 tw-py-2 focus:tw-border-gray-700 placeholder:tw-text-sm' />

                <input onChange={(e) => setZari(e.target.value)} value={zari} type="text" placeholder='Zari' className='tw-outline-none tw-border tw-rounded-sm tw-box-border tw-w-11/12 tw-mx-3 tw-mb-3 tw-px-3 tw-py-2 focus:tw-border-gray-700 placeholder:tw-text-sm' />

                <input onChange={(e) => setFabric(e.target.value)} value={fabric} type="text" placeholder='Material' className='tw-outline-none tw-border tw-rounded-sm tw-box-border tw-w-11/12 tw-mx-3 tw-mb-3 tw-px-3 tw-py-2 focus:tw-border-gray-700 placeholder:tw-text-sm' />

                <input onChange={(e) => setWeight(e.target.value)} value={weight} type="text" placeholder='Weight' className='tw-outline-none tw-border tw-rounded-sm tw-box-border tw-w-11/12 tw-mx-3 tw-mb-3 tw-px-3 tw-py-2 focus:tw-border-gray-700 placeholder:tw-text-sm' />

                {/* <input onChange={(e) => setWashcare(e.target.value)} value={washcare} type="text" placeholder='Wash Care' className='tw-outline-none tw-border tw-rounded-sm tw-box-border tw-w-11/12 tw-mx-3 tw-mb-3 tw-px-3 tw-py-2 focus:tw-border-gray-700 placeholder:tw-text-sm' /> */}

                {/* <input onChange={(e) => setNote(e.target.value)} value={note} type="text" placeholder='Note' className='tw-outline-none tw-border tw-rounded-sm tw-box-border tw-w-11/12 tw-mx-3 tw-mb-3 tw-px-3 tw-py-2 focus:tw-border-gray-700 placeholder:tw-text-sm' /> */}


                {/* images */}
                <p className='tw-mx-3 tw-py-3 tw-text-sm md:tw-text-base tw-font-bold tw-text-gray-700 '>Images</p>

                <div className='tw-flex'>
                    {imagePerview.map((image, index) => (
                        <img className='tw-m-2  ' key={index} src={image} alt='preview images' height={'52'} width={'55'} />
                    ))}
                </div>

                <div className='tw-m-3 tw-mb-9 tw-w-11/12 tw-flex tw-relative '>

                    <label htmlFor="product_img"
                        className='tw-cursor-pointer tw-w-full tw-border tw-px-3 tw-py-2 tw-rounded-md tw-bg-gray-100 tw-z-10'>
                        Choose Images
                    </label>

                    <input required onChange={imageHandler} name='productPic' id='product_img' type="file" className='tw-absolute' />
                </div>

                {/* SAVE */}
                <button className='tw-flex tw-justify-center tw-my-4 tw-w-full' disabled={loading} >
                    <p className='tw-w-10/12 tw-text-white tw-bg-[#5a114a] disabled:tw-bg-[#741660] hover:tw-bg-[#4a0e3d] tw-rounded-sm tw-py-3'>Create</p>
                </button>

            </form>
        </>
    )
}

export default CreateProduct