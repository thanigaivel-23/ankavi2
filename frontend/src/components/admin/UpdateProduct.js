import React, { useEffect, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FaRegTrashCan } from "react-icons/fa6"
import { getSingleProduct, updateProduct } from '../../actions/productAction'
import toast from 'react-hot-toast'
import { clearError, clearProductUpdated } from '../../slices/productSlice'
import NavBar from '../layouts/NavBar'
import AdminNavbar from './AdminNavbar'
import MetaData from '../layouts/MetaData'

const UpdateProduct = () => {

    const { id: productId } = useParams()

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [fabric, setFabric] = useState('')
    const [zari, setZari] = useState('')
    // const [washcare, setWashcare] = useState('')
    const [weight, setWeight] = useState('')
    const [stock, setStock] = useState('')
    // const [note, setNote] = useState('')
    const [category, setCategory] = useState('')
    const [video_link, setVideo_link] = useState('')
    const [images, setImages] = useState([])
    const [imagePerview, setImagePerview] = useState([])
    const [imagesCleared, setImagesCleared] = useState(false)

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

    const { loading, isProductUpdated, error, singleProduct } = useSelector(state => state.productState)

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
        formData.append('imagesCleared', imagesCleared)

        dispatch(updateProduct(formData, productId))

    }

    const clearImagesHandler = () => {
        setImagePerview([])
        setImages([])
        setImagesCleared(true)
    }

    useEffect(() => {

        if (isProductUpdated) {
            toast.success('Product Updated Successfully')
            dispatch(clearProductUpdated())
            navigate('/admin/products')
            return;
        }

        if (error) {
            toast.error(error)
            dispatch(clearError())
            return
        }

        dispatch(getSingleProduct(productId))


    }, [isProductUpdated, error, dispatch, navigate, productId])

    useEffect(() => {
        if (singleProduct && singleProduct._id) {
            setName(singleProduct.name)
            setPrice(singleProduct.price)
            setDescription(singleProduct.description)
            setStock(singleProduct.stock)
            setCategory(singleProduct.category)
            setFabric(singleProduct.fabric)
            // setNote(singleProduct.note)
            setZari(singleProduct.zari)
            setWeight(singleProduct.weight)
            // setWashcare(singleProduct.washcare)
            setVideo_link(singleProduct.video_link)

            let images = []
            singleProduct.images.forEach((image) => {
                images.push(image.image)
            })
            setImagePerview(images)

        }
    }, [singleProduct])

    return (
        <>
            <MetaData title={'Ankavi Silks - Update Product'} />

            {/* nav bar */}
            <NavBar />

            {/*admin nav bar */}
            <AdminNavbar />

            {/* heading */}
            <div className='md:tw-w-[70%] lg:tw-w-[50%] tw-mx-auto tw-mt-12 tw-hidden md:tw-flex md:tw-text-lg tw-items-center tw-gap-x-3 '>
                <Link to={'/admin/products'}><BsArrowLeft className="tw-text-2xl " /> </Link>
                <p className='tw-font-medium'>Back</p>
            </div>

            {/*update product*/}
            <form onSubmit={submitHandler} className='md:tw-border-2 md:tw-w-[70%] lg:tw-w-[50%] md:tw-mx-auto md:tw-my-7'>

                <p className='tw-px-3 tw-py-3 tw-text-sm md:tw-text-xl tw-font-bold tw-text-gray-700 tw-bg-gray-100 md:tw-bg-white'>Update Product</p>

                {/* name */}
                <p className='tw-mx-3 tw-py-3 tw-text-sm md:tw-text-base tw-font-bold tw-text-gray-700 '>Name of the Product</p>

                <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Enter Product Name' className='tw-outline-none tw-border tw-rounded-sm tw-box-border tw-w-11/12 tw-mx-3 tw-mb-3 tw-px-3 tw-py-2 focus:tw-border-gray-700 placeholder:tw-text-sm' />

                {/* price */}
                <p className='tw-mx-3 tw-py-3 tw-text-sm md:tw-text-base tw-font-bold tw-text-gray-700 '>Price</p>

                <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" placeholder='Enter Product Price ' className='tw-outline-none tw-border tw-rounded-sm tw-box-border tw-w-11/12 tw-mx-3 tw-mb-3 tw-px-3 tw-py-2 focus:tw-border-gray-700 placeholder:tw-text-sm' />

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

                <input onChange={(e) => setFabric(e.target.value)} value={fabric} type="text" placeholder='Fabric' className='tw-outline-none tw-border tw-rounded-sm tw-box-border tw-w-11/12 tw-mx-3 tw-mb-3 tw-px-3 tw-py-2 focus:tw-border-gray-700 placeholder:tw-text-sm' />

                <input onChange={(e) => setWeight(e.target.value)} value={weight} type="text" placeholder='Weight' className='tw-outline-none tw-border tw-rounded-sm tw-box-border tw-w-11/12 tw-mx-3 tw-mb-3 tw-px-3 tw-py-2 focus:tw-border-gray-700 placeholder:tw-text-sm' />

                {/* <input onChange={(e) => setWashcare(e.target.value)} value={washcare} type="text" placeholder='Wash Care' className='tw-outline-none tw-border tw-rounded-sm tw-box-border tw-w-11/12 tw-mx-3 tw-mb-3 tw-px-3 tw-py-2 focus:tw-border-gray-700 placeholder:tw-text-sm' /> */}


                {/* <input onChange={(e) => setNote(e.target.value)} value={note} type="text" placeholder='Note' className='tw-outline-none tw-border tw-rounded-sm tw-box-border tw-w-11/12 tw-mx-3 tw-mb-3 tw-px-3 tw-py-2 focus:tw-border-gray-700 placeholder:tw-text-sm' /> */}

                {/* images */}
                <p className='tw-mx-3 tw-py-3 tw-text-sm md:tw-text-base tw-font-bold tw-text-gray-700 '>Images</p>

                <div className='tw-flex tw-items-center tw-mx-3'>
                    {imagePerview.length > 0 && <span onClick={clearImagesHandler} className='tw-flex tw-items-center tw-cursor-pointer tw-gap-x-2 tw-text-rose-500'> <FaRegTrashCan className='tw-text-xl' /> Clear All </span>}
                    {imagePerview.map((image, index) => (
                        <img className='tw-m-2  ' key={index} src={image} alt='preview images' height={'52'} width={'55'} />
                    ))}
                </div>

                <div className='tw-m-3 tw-mb-9 tw-w-11/12 tw-flex tw-relative '>

                    <label htmlFor="product_img"
                        className='tw-cursor-pointer tw-w-full tw-border tw-px-3 tw-py-2 tw-rounded-md tw-bg-gray-100 tw-z-10'>
                        Choose Images
                    </label>

                    <input onChange={imageHandler} name='productPic' id='product_img' type="file" className='tw-absolute' />
                </div>

                {/* SAVE */}
                <button className='tw-flex tw-justify-center tw-my-4 tw-w-full' disabled={loading} >
                    <p className='tw-w-10/12 tw-text-white tw-bg-[#5a114a] disabled:tw-bg-[#741660] hover:tw-bg-[#4a0e3d] tw-rounded-sm tw-py-3'>Update</p>
                </button>

            </form>
        </>
    )
}

export default UpdateProduct