// ...existing code...
import Carousel from "react-bootstrap/Carousel";

const ExampleCarouselImage1 = ({ text }) => (
    <img
        src={`https://tse2.mm.bing.net/th/id/OIP.dC_KrULP-0C-IzV5o0xMTwHaEK?pid=Api&P=0&h=180${encodeURIComponent(text)}/900/400`}
        alt={text}
        className="d-block w-100"
        style={{ objectFit: "cover", height: 400 }}
    />
);
const ExampleCarouselImage2 = ({ text }) => (
    <img
        src={`https://tse3.mm.bing.net/th/id/OIP.-kLfT5e0RhJPiGgIfV1vUAHaD4?pid=Api&P=0&h=180${encodeURIComponent(text)}/900/400`}
        alt={text}
        className="d-block w-100"
        style={{ objectFit: "cover", height: 400 }}
    />
);
const ExampleCarouselImage3 = ({ text }) => (
    <img
        src={`https://tse4.mm.bing.net/th/id/OIP.PJC-ztc0dnLohbiaZ5BSHwHaDw?pid=Api&P=0&h=180${encodeURIComponent(text)}/900/400`}
        alt={text}
        className="d-block w-100"
        style={{ objectFit: "cover", height: 400 }}
    />
);

const BootstrapTestCssGrid = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <ExampleCarouselImage1 text="First slide" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage2 text="Second slide" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage3 text="Third slide" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BootstrapTestCssGrid;
// ...existing code...