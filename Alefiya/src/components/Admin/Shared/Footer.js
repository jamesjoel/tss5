import React from "react";

const Header = () => {
    return (
        <>
            <div class="container-fluid bg-white footer">
                <div class="container py-5">
                    <div class="row g-5">
                        <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                            <a href="index.html" class="d-inline-block mb-3">
                                <h1 class="text-primary">Hairnic</h1>
                            </a>
                            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus, vitae porttitor purus nisl vitae purus.</p>
                        </div>
                        <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                            <h5 class="mb-4">Get In Touch</h5>
                            <p><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                            <p><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p><i class="fa fa-envelope me-3"></i>info@example.com</p>
                            <div class="d-flex pt-2">
                                <a class="btn btn-square btn-outline-primary me-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square btn-outline-primary me-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square btn-outline-primary me-1" href=""><i class="fab fa-instagram"></i></a>
                                <a class="btn btn-square btn-outline-primary me-1" href=""><i
                                    class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                            <h5 class="mb-4">Our Products</h5>
                            <a class="btn btn-link" href="">Hair Shining Shampoo</a>
                            <a class="btn btn-link" href="">Anti-dandruff Shampoo</a>
                            <a class="btn btn-link" href="">Anti Hair Fall Shampoo</a>
                            <a class="btn btn-link" href="">Hair Growing Shampoo</a>
                            <a class="btn btn-link" href="">Anti smell Shampoo</a>
                        </div>
                        <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                            <h5 class="mb-4">Popular Link</h5>
                            <a class="btn btn-link" href="">About Us</a>
                            <a class="btn btn-link" href="">Contact Us</a>
                            <a class="btn btn-link" href="">Privacy Policy</a>
                            <a class="btn btn-link" href="">Terms & Condition</a>
                            <a class="btn btn-link" href="">Career</a>
                        </div>
                    </div>
                </div>
                <div class="container wow fadeIn" data-wow-delay="0.1s">
                    <div class="copyright">
                        <div class="row">
                            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a class="border-bottom" href="#">Your Site Name</a>, All Right Reserved.

                                Designed By <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a> Distributed by <a href="https://themewagon.com">ThemeWagon</a>
                            </div>
                            <div class="col-md-6 text-center text-md-end">
                                <div class="footer-menu">
                                    <a href="">Home</a>
                                    <a href="">Cookies</a>
                                    <a href="">Help</a>
                                    <a href="">FAQs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header;