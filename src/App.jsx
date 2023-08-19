import {
    CustomerReviews, Footer,
    Hero,
    PopularProduct,
    Services,
    SpecialOffers,
    Subscribe,
    SuperQuality
} from "./sections/index.js";
import Nav from "./components/Nav.jsx";
const App = () => (


    <main className="bg-primary-500">
        <Nav className={""} />
        <section className={"xl:padding-1 wide:padding-r padding-b"}>
            <Hero />
        </section>
        <section className={"padding"}>
            <PopularProduct/>
        </section>
        <section className={"padding"}>
            <SuperQuality/>
        </section>
        <section className={"padding-x py-10"}>
            <Services/>
        </section>
        <section className={"padding"}>
            <SpecialOffers/>
        </section>
        <section className={"bg-pale-blue padding"}>
            <CustomerReviews/>
        </section>
        <section className={"padding-x sm:py-32 py-16 w-full"}>
            <Subscribe/>
        </section>
        <section className={"bg-black padding-x padding-t pb-8"}>
            <Footer/>
        </section>
        <div className={"fl"}>

        </div>


    </main>
)

export default App;
