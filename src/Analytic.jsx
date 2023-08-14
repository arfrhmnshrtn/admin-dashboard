import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ListIcon from '@mui/icons-material/List';
import SearchIcon from '@mui/icons-material/Search';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function (theme) {
    return (
        <>
            <div className='flex justify-between items-center flex-wrap'>
                <div>
                    <h1 className='text-3xl font-bold mt-5'>Dashboard</h1>
                    <p className='mt-2 text-sm text-slate-500'>Analytics / Shop</p>
                </div>
                <div>
                    <button className='bg-blue-600 text-white px-3 py-1 rounded-full'>
                        <CloudDownloadIcon />
                        <span className='ms-1'>Download CSV</span>
                    </button>
                </div>
            </div>

            <div className='mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mb-10'>
                <div className={`${theme ? 'bg-slate-700' : 'bg-white'} flex items-center px-10 py-4 rounded-lg mt-3 `}>
                    <span className='bg-blue-200 text-blue-500 p-4'><EventAvailableIcon /></span>
                    <div className='ms-2'>
                        <h1 className='font-bold text-xl'>1,074</h1>
                        <p className='text-sm text-slate-500'>Paid Order</p>
                    </div>
                </div>
                <div className='bg-white  flex items-center px-10 py-4 rounded-lg mt-3'>
                    <span className='bg-yellow-200 text-yellow-500 p-4'><RemoveRedEyeIcon /></span>
                    <div className='ms-2'>
                        <h1 className='font-bold text-xl'>3,944</h1>
                        <p className='text-sm text-slate-500'>Site Visite</p>
                    </div>
                </div>
                <div className='bg-white  flex items-center px-10 py-4 rounded-lg mt-3'>
                    <span className='bg-green-200 text-green-500 p-4'><ShowChartIcon /></span>
                    <div className='ms-2'>
                        <h1 className='font-bold text-xl'>14,721</h1>
                        <p className='text-sm text-slate-500'>Searches</p>
                    </div>
                </div>
                <div className='bg-white  flex items-center px-10 py-4 rounded-lg mt-3'>
                    <span className='bg-red-200 text-red-500 p-4'><LocalAtmIcon /></span>
                    <div className='ms-2'>
                        <h1 className='font-bold text-xl'>$6,789</h1>
                        <p className='text-sm text-slate-500'>Total Sales</p>
                    </div>
                </div>
            </div>

            {/* Recent order start */}
            <div className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
                <div className=''>
                    <div className='flex bg-white justify-between p-5 rounded-lg'>
                        <h1 className='font-bold'>
                            <span className='me-3'><LibraryBooksIcon /></span>
                            Recent Orders
                        </h1>
                        <div className='flex'>
                            <div className='me-5'>
                                <ListIcon />
                            </div>
                            <div>
                                <SearchIcon />
                            </div>
                        </div>
                    </div>

                    <div className='bg-white p-5'>
                        <table className=" p-10 w-full">
                            <thead>
                                <tr className=" text-start ">
                                    <th className="text-start">User</th>
                                    <th className="text-start">Order Date</th>
                                    <th className=" ">Status</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                <tr className='mt-5'>
                                    <td className="text-start pt-5">Arief Rachman</td>
                                    <td className="text-start pt-5">14-01-2005</td>
                                    <td className=" text-white text-center flex justify-center pt-5">
                                        <h1 className='bg-green-600 rounded-full w-max px-2 py-1'>Complated</h1>
                                    </td>
                                </tr>
                                <tr className=''>
                                    <td className="text-start pt-5">Arief Rachman</td>
                                    <td className="text-start pt-5">14-01-2005</td>
                                    <td className=" text-white text-center flex justify-center pt-5">
                                        <h1 className='bg-green-600 rounded-full w-max px-2 py-1'>Complated</h1>
                                    </td>
                                </tr>
                                <tr className='mt-5'>
                                    <td className="text-start pt-5">Arief Rachman</td>
                                    <td className="text-start pt-5">14-01-2005</td>
                                    <td className=" text-white text-center flex justify-center pt-5">
                                        <h1 className='bg-green-600 rounded-full w-max px-2 py-1'>Complated</h1>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* reminders start */}
                <div className='bg-white mt-5 md:mt-0 rounded-lg'>
                    <div className='flex justify-between p-5'>
                        <div className='flex font-bold'>
                            <span className='me-3'>
                                <TextSnippetIcon />
                            </span>
                            <h1>Reminders</h1>
                        </div>
                        <div className='flex'>
                            <div className='me-5'>
                                <ListIcon />
                            </div>
                            <div>
                                <SearchIcon />
                            </div>
                        </div>
                    </div>
                    <div className='p-5'>
                        <div className='bg-green-700  rounded-lg '>
                            <div className='bg-slate-100 flex items-center justify-between ms-2 overflow-hidden rounded-r-lg'>
                                <h1 className='ms-1 px-3 py-2 w-full'>
                                    <span className='me-2'>
                                        <CheckCircleOutlineIcon />
                                    </span>
                                    Start Our Meeting
                                </h1>
                                <span className='bg-slate-100 me-2'>
                                    <MoreVertIcon />
                                </span>
                            </div>
                        </div>
                        <div className='bg-green-700  rounded-lg mt-5'>
                            <div className='bg-slate-100 flex items-center justify-between ms-2 overflow-hidden rounded-r-lg'>
                                <h1 className='ms-1 px-3 py-2 w-full'>
                                    <span className='me-2'>
                                        <CheckCircleOutlineIcon />
                                    </span>
                                    Start Our Meeting
                                </h1>
                                <span className='bg-slate-100 me-2'>
                                    <MoreVertIcon />
                                </span>
                            </div>
                        </div>
                        <div className='bg-green-700  rounded-lg mt-5'>
                            <div className='bg-slate-100 flex items-center justify-between ms-2 overflow-hidden rounded-r-lg'>
                                <h1 className='ms-1 px-3 py-2 w-full'>
                                    <span className='me-2'>
                                        <CheckCircleOutlineIcon />
                                    </span>
                                    Start Our Meeting
                                </h1>
                                <span className='bg-slate-100 me-2'>
                                    <MoreVertIcon />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}