function Error({ message }) {
    return (
        <div className="w-full text-red-500 bg-white mb-1 rounded-4xl shadow-xl py-3 px-9 text-center">
            {message}
        </div>
    )
}

export default Error
