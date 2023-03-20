import Restricted from './components/Restricted'


function App() {
  // Replace this with your own permission array and make sure the 'codename' property is there.
  const arrPermissions = [{ codename: 'section permissions' }]

  // Replace permissions with the permission to pass to the component.
  const permission = 'seciotn permissions';

  return (
    <div>
      <Restricted listPermissions={arrPermissions} permission={permission}>
        {/* replace this component with whatever component you want to render. */}
        <p>You have permission to view this section!</p>
        {/* replace this component with whatever component you want to render. */}
        </Restricted>
    </div>
  );
}

export default App;
