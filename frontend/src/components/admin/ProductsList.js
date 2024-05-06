import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { clearError, clearProductDeleted } from '../../slices/productSlice';
import { deleteProduct, getAdminProducts } from '../../actions/productAction';
import { MDBDataTable } from 'mdbreact'
import NavBar from '../layouts/NavBar';
import AdminNavbar from './AdminNavbar';
import Loader from '../layouts/Loader';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { Popconfirm } from 'antd';
import MetaData from '../layouts/MetaData';


const ProductsList = () => {

    const { products = [], loading = true, error, isProductDeleted } = useSelector(state => state.productState)

    const dispatch = useDispatch()

    const setProducts = () => {
        const data = {
            columns: [

                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: 'Price',
                    field: 'price',
                    sort: 'asc'
                },
                {
                    label: 'Stock',
                    field: 'stock',
                    sort: 'asc'
                },
                {
                    label: 'Action',
                    field: 'action',
                    sort: 'asc'
                },
                {
                    label: 'ID',
                    field: 'id',
                    sort: 'asc'
                }
            ],
            rows: []
        }
        products.forEach(product => {
            data.rows.push({
                name: (
                    <Link to={`/product/${product._id}`} className='tw-no-underline'>{product.name}</Link>
                ),
                price: `Rs. ${product.price}`,
                stock: product.stock,
                id: product._id,
                action: (
                    <>

                        <div className='tw-text-center tw-flex tw-justify-center tw-gap-x-2'>

                            <Link to={`/admin/product/${product._id}`} className='tw-bg-blue-500 tw-p-2 
                            tw-rounded-md '><MdOutlineEdit className='tw-text-white tw-text-xl' /></Link>

                            <Popconfirm title="Are you sure?" placement='top' icon={false} okText="Yes" cancelText="No" onConfirm={(e) => deleteHandler(e, product._id)}
                            >
                                <button className='tw-bg-red-500 tw-p-2 
                                 tw-rounded-md'><RiDeleteBin6Line className='tw-text-white tw-text-xl' /></button>

                            </Popconfirm>
                        </div>

                    </>
                )
            })
        });

        return data
    }

    const deleteHandler = (e, id) => {
        e.target.disabled = true
        dispatch(deleteProduct(id))
    }

    useEffect(() => {


        if (error) {
            toast.error(error)
            dispatch(clearError())
            return
        }

        if (isProductDeleted) {
            toast.success('Product Deleted Successfully')
            dispatch(clearProductDeleted())
            return
        }

        dispatch(getAdminProducts)


    }, [error, dispatch, isProductDeleted])

    return (
        <>
            <MetaData title={'Ankavi Silks - Products'} />

            {/* nav bar */}
            <NavBar />

            {/*admin nav bar */}
            <AdminNavbar />

            {loading ? <Loader /> :

                <MDBDataTable
                    data={setProducts()}
                    bordered
                    hover
                    striped
                    responsive
                    className='tw-px-3 tw-mx-auto tw-w-[98%] lg:tw-w-[80%]' />

            }
        </>
    )
}

export default ProductsList