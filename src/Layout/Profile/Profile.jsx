import { useState } from "react";
import TabButton from "../../components/Profile/TabButton";
import InfoCard from "../../components/common/InfoCard";
import { useNavigate } from "react-router-dom";

function BasicTabContent() {
  return (
    <div className="space-y-6">
      {/* ROW 1: Personal + Right Split Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Personal Detail */}
        <div className="h-full">
          <InfoCard
            title="Personal Detail"
            extraContent={
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="cursor-pointer flex flex-col items-center justify-center border border-dashed border-gray-400 p-4 h-32 w-full rounded-md text-sm text-gray-500 hover:bg-gray-50 transition">
                  Passport Size Photo
                  <input type="file" name="passport" className="hidden" />
                </label>
                <label className="cursor-pointer flex flex-col items-center justify-center border border-dashed border-gray-400 p-4 h-32 w-full rounded-md text-sm text-gray-500 hover:bg-gray-50 transition">
                  Profile Photo
                  <input type="file" name="profile" className="hidden" />
                </label>
              </div>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700 leading-relaxed">
              <p><span className="font-medium">Employee ID:</span> <span className="text-orange-500">#CCC00272</span></p>
              <p><span className="font-medium">Joining Date:</span> 02 Jan, 2025</p>
              <p><span className="font-medium">First Name:</span> Vishal</p>
              <p><span className="font-medium">Last Name:</span> Saraiwal</p>
              <p><span className="font-medium">Gender:</span> Male</p>
              <p><span className="font-medium">Blood Group:</span> B+</p>
              <p><span className="font-medium">Actual DOB:</span> 09 Sept, 2001</p>
              <p><span className="font-medium">Documented DOB:</span> 03 Apr, 2003</p>
              <p><span className="font-medium">Anniversary Date:</span> -</p>
              <p><span className="font-medium">PAN Card:</span> NNCPS568XX</p>
              <p><span className="font-medium">Aadhaar Card:</span> 7211 6260 XXXX</p>
              <p><span className="font-medium">UAN Number:</span> 10002562422367</p>
            </div>
          </InfoCard>
        </div>

        {/* Right: Stacked Employee Credentials + Contact Details */}
        <div className="flex flex-col gap-6 h-full">
          <div className="flex-1">
            <InfoCard title="Employee Credentials" className="h-full">
              <div className="space-y-2 text-sm text-gray-700 leading-relaxed pb-16">
                <p><span className="font-medium">Official Email Id:</span> vishal.saraiwal@cccinfotech.com</p>
                <p><span className="font-medium">Password:</span> XXXXXXX</p>
              </div>
            </InfoCard>
          </div>
          <div className="flex-1">
            <InfoCard title="Contact Details" className="h-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700 leading-relaxed">
                <p><span className="font-medium">Phone:</span> +91 91933785XX</p>
                <p><span className="font-medium">Alternate Phone:</span> +91 70785468XX</p>
                <p><span className="font-medium">Email Id:</span> vishalsaraiwal68@gmail.com</p>
                <p><span className="font-medium">Emergency Contact Name:</span> Kritriv</p>
                <p><span className="font-medium">Emergency Number:</span> +91 70785468XX</p>
                <p><span className="font-medium">Emergency Email Id:</span> -</p>
                <p><span className="font-medium">Relation With:</span> Brother</p>
              </div>
            </InfoCard>
          </div>
        </div>
      </div>

      {/* ROW 2: Present & Permanent Address */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InfoCard title="Present Address">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 leading-relaxed">
            <p><span className="font-medium">Address line 1:</span> Noida 63</p>
            <p><span className="font-medium">Address line 2:</span> -</p>
            <p><span className="font-medium">Country:</span> India</p>
            <p><span className="font-medium">State:</span> Uttar Pradesh</p>
            <p><span className="font-medium">City:</span> Noida</p>
            <p><span className="font-medium">Postal Code:</span> 201309</p>
          </div>
        </InfoCard>

        <InfoCard title="Permanent Address">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 leading-relaxed">
            <p><span className="font-medium">Address line 1:</span> Noida 63</p>
            <p><span className="font-medium">Address line 2:</span> -</p>
            <p><span className="font-medium">Country:</span> India</p>
            <p><span className="font-medium">State:</span> Uttar Pradesh</p>
            <p><span className="font-medium">City:</span> Noida</p>
            <p><span className="font-medium">Postal Code:</span> 201309</p>
          </div>
        </InfoCard>
      </div>
    </div>
  );
}


function CompanyTabContent() {
  return (
    <>
      <InfoCard title="Company Details">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
          <p><span className="font-medium">Branch:</span> Noida</p>
          <p><span className="font-medium">Department:</span> IT</p>
          <p><span className="font-medium">Designation:</span> UI/UX Designer</p>
          <p><span className="font-medium">Shift:</span> General</p>
          <p><span className="font-medium">Manager:</span> No</p>
          <p><span className="font-medium">Reporting Manager:</span> Rakesh Chaturvedi</p>
          <p><span className="font-medium">Employment Type:</span> Full Time</p>
        </div>
      </InfoCard>

      <InfoCard title="Notice Period">
        <div className="space-y-1 text-sm text-gray-700">
          <p><span className="font-medium">Status:</span> No</p>
          <p><span className="font-medium">Start Date:</span> -</p>
          <p><span className="font-medium">End Date:</span> -</p>
        </div>
      </InfoCard>
    </>
  );
}

function ProfessionalTabContent() {
  return (
    <>
      <InfoCard title="Professional Details">
        <div className="space-y-1 text-sm text-gray-700">
          <p><span className="font-medium">Experience:</span> 4 years</p>
          <p><span className="font-medium">Source:</span> LinkedIn</p>
          <p><span className="font-medium">Probation:</span> 3 Months</p>
        </div>
      </InfoCard>

      <InfoCard title="Education">
        <ul className="text-sm text-gray-700 list-disc ml-5 space-y-1">
          <li>BSc. Hons, CCSU, Meerut (2023)</li>
          <li>Field: Computer Science</li>
        </ul>
      </InfoCard>

      <InfoCard title="Experience">
        <div className="space-y-1 text-sm text-gray-700">
          <p><span className="font-medium">Occupation:</span> UI/UX Designer</p>
          <p><span className="font-medium">Company:</span> XXXXXXXXXXX</p>
          <p><span className="font-medium">Duration:</span> 0.6 Years</p>
        </div>
      </InfoCard>

      <InfoCard title="Certifications">
        <div className="space-y-1 text-sm text-gray-700">
          <p><span className="font-medium">Title:</span> UI/UX Design Certification by Google</p>
          <p><span className="font-medium">Skills:</span> UI/UX Design</p>
          <p><span className="font-medium">Valid Till:</span> -</p>
          <p><span className="font-medium">Certificate:</span> View</p>
        </div>
      </InfoCard>
    </>
  );
}

function FinanceTabContent() {
  return (
    <>
      <InfoCard title="Salary Info">
        <div className="space-y-1 text-sm text-gray-700">
          <p><span className="font-medium">CTC:</span> ₹ 4,00,000</p>
          <p><span className="font-medium">Monthly Gross:</span> ₹ 31,533</p>
          <p><span className="font-medium">Hours:</span> 160</p>
        </div>
      </InfoCard>

      <InfoCard title="Bank Info">
        <div className="space-y-1 text-sm text-gray-700">
          <p><span className="font-medium">Bank Name:</span> ICICI Bank</p>
          <p><span className="font-medium">Account No:</span> 655432786554</p>
          <p><span className="font-medium">IFSC:</span> ICIC005684</p>
        </div>
      </InfoCard>
    </>
  );
}

export default function Profile() {
  const [tab, setTab] = useState("basic");
  const navigate = useNavigate();

  return (
    <>
      {/* Tabs */}
      <div className="mt-6 flex flex-wrap gap-3 border-b border-gray-300 pb-2">
        <div className="bg-white px-3 py-1 rounded-md">
        <TabButton
          label="Basic Information"
          active={tab === "basic"}
          onClick={() => setTab("basic")}
        />
        <TabButton
          label="Company Information"
          active={tab === "company"}
          onClick={() => setTab("company")}
        />
        <TabButton
          label="Professional Background"
          active={tab === "professional"}
          onClick={() => setTab("professional")}
        />
        <TabButton
          label="Financial Details"
          active={tab === "finance"}
          onClick={() => setTab("finance")}
        />
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-8">
        {tab === "basic" ? (
          <BasicTabContent /> // ⛔ DO NOT wrap this in another grid
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {tab === "company" && <CompanyTabContent />}
            {tab === "professional" && <ProfessionalTabContent />}
            {tab === "finance" && <FinanceTabContent />}
          </div>
        )}
      </div>
    </>
  );
}
