import { AiFillPhone } from "react-icons/ai";
function Contact() {
    return (
        <main>
            <h2 className="text-center text-warning animate__animated animate__rotateInDownRight locationHeader">Contact</h2>
            <br />
            <div className="text-center">
                <div>
                    <ul>
                        <h2>İstanbul</h2>
                        <AiFillPhone /> 0232 354 5568 / 0232 354 5569
                    </ul>
                    <ul>
                        <h2>London</h2>
                        <AiFillPhone /> 020 7946 0321 / 020 7946 0322
                    </ul>
                    <ul>
                        <h2>Paris</h2>
                        <AiFillPhone /> 0132 212 7565 / 0132 212 7566
                    </ul>
                    <ul>
                        <h2>New York</h2>
                        <AiFillPhone /> 0832-985-3468 / 0832-985-3321
                    </ul>
                    <ul>
                        <h2>Manchester</h2>
                        <AiFillPhone /> 020 7986 0323 - 020 7676 0324
                    </ul>
                </div>
            </div>
        </main>
    );
}

export default Contact;