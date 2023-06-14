export default function Hero() {
    return(
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                    <div className="md:w-1/2">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to My Website</h1>
                        <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus tellus nec placerat semper. Vestibulum lacinia pulvinar metus, in commodo dolor finibus ac. Mauris sagittis risus sit amet pulvinar varius.</p>
                        <button className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-full text-lg font-bold">Get Started</button>
                    </div>
                    <div className="md:w-1/2">
                        <img src="https://via.placeholder.com/500x400" alt="Hero Image" width={500} height={400} className="rounded-lg mx-auto" />
                    </div>
                </div>
            </div>
        </section>
    );
}