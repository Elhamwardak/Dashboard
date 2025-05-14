

const Input = (props) => {
  return (
    <>
        <div className="w-full">
            <label className="block mb-1 text-sm font-normal text-gray-600">{props.label}</label>
            <input 
                placeholder={props.placeholder}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3 placeholder:text-sm"
            />
        </div>
    </>
  )
}

export default Input