
import Image from 'next/image';

const ProofSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-start">
      {/* Payment Receipt Section (Left Column) */}
      <div className="bg-white p-10 rounded-lg shadow-xl flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-red-700 mb-8 text-center">Irrefutable Proof of Payment</h2>
        <p className="text-gray-700 mb-6 text-center">
          Below is the payment receipt for the two-year package. Please note that personal and sensitive details have been carefully redacted to protect my privacy.
        </p>
        <div className="w-full flex justify-center">
          <Image
            src="/Payment_Receipt.jpg"
            alt="Payment Receipt for Omega Home Tutors"
            width={400} // Intrinsic width for optimization
            height={600} // Intrinsic height for optimization
            className="rounded-lg shadow-lg border border-gray-200"
          />
        </div>
      </div>
      {/* Key Individuals and Details (Right Column) */}
      <div className="bg-white p-10 rounded-lg shadow-xl flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-red-700 mb-8 text-center">Key Individuals Involved</h2>
        <p className="text-gray-700 mb-8 text-center">
          While I cannot disclose names for privacy and safety reasons, these are the roles of the individuals who were central to this unfortunate experience:
        </p>
        <div className="space-y-8">
          <div className="p-8 bg-red-50 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-red-800 mb-3">The counsellor</h3>
                <p className="text-gray-700">The individual who visited my home in Ranchi, conducted the initial interview, and made the compelling, yet ultimately false, promises about the service quality and PAN India coverage.</p>
                <p className="text-gray-700 mt-4"><strong>Mobile:</strong> 9708554906</p>
              </div>
          <div className="p-8 bg-red-50 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-red-800 mb-3">The Service Coordinator</h3>
                <p className="text-gray-700">The primary contact person who initially assured me of seamless service continuation after my relocation to Ghaziabad, but subsequently became unresponsive to all my attempts at communication.</p>
                <p className="text-gray-700 mt-4"><strong>Mobile:</strong> 9430703672</p>
              </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
