
import { Button } from "./ui/button";

const CallToAction = () => {
  return (
    <section className="bg-motech-600 py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to upgrade your tech?</h2>
            <p className="text-white/80 max-w-md">
              Join thousands of satisfied customers. Get your Motech laptop today and experience the difference.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-white text-motech-600 hover:bg-gray-100">
              Shop Now
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
