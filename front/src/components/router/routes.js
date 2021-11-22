import Auth from "../Auth"
import Forma from '../Forma'
import Operator from '../Operator'

export const Routes = {
    auth: '/auth',
    forma: '/forma',
    operator: '/operator'
}
export const publicRoutes = [
    {path: Routes.operator, exact: true, component: Operator},
    {path: Routes.forma, exact: true, component: Forma},
    {path: Routes.auth, exact: true, component: Auth},
]

export const privateRoutes = [
    {path: Routes.auth, exact: true, component: Auth},
    {path: Routes.forma, exact: true, component: Forma},
]

/* <Switch>
<div className={props.style}>
    <Route path='/main'>
            <DataBasePage/>
    </Route>
    <Route path='/attention'>
            <NoticePage/>
    </Route>
    <Route path='/help'>
            <HelpPage/>
    </Route>
    <Route path='/contacts'>
            <ContactsPage/>
    </Route>
    <Route path='/music'>
            <MusicPage/>
    </Route>
    <Route path='/about' exact>
            <AboutPage/>
    </Route>
    <Route path='/news' exact>
            <NewsPage/>
    </Route>
    <Route path='/news/:id' exact>
            <NewPage/>
    </Route>
    <Route path='/countries' exact>
            <Countries/>
    </Route>
    <Redirect to='/main'/>
</div>
</Switch>
) 
:
(
<Switch>
<div className={props.style}>
    <Route path='/auth'>
    <Auth/>
    </Route>
    <Redirect to='/auth'/>
</div>
</Switch> */