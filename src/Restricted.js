import React from 'react'

// ----------------------------------------------------------------------

const Restricted = ({
  listPermissions, //list permissions, accepts an array of objects containing the permissions under the label ''codename''. ex: [{codename: 'health services'}]
  permission, //permission, I accept a string indicating the type of permission. Ex: 'health services'
  showMessageText, //showMessagetext, accepts a string of a message, in case you don't have permissions for a certain section. ex: 'You do not have permission for this section!
  showMessageClassName, //showMessageClassName, takes a class to change the style of the component that renders showMessageText
  children, // children, accept any component we switch to Restricted which will be rendered in case we have valid permission. Ex: <Restricted> <AnyComponents /> </Restricted>
}) => {
const Rendering = listPermissions?.some(
    (item) => item.codename === permission,
)
if (Rendering) {
    return <>{children}</>
} else if (showMessageText) {
    return (
    <div
        style={{ padding: 3, marginBottom: 3, width: '100%' }}
        className={showMessageClassName}
    >
        <span>{showMessageText}</span>
    </div>
    )
} else {
    return null
}
}

export default Restricted
