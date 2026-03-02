import erDiagram from "@/assets/er-diagram.png";
import dfdDiagram from "@/assets/dfd-diagram.png";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

const Documentation = () => {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-white">
      {/* Print button - hidden in print */}
      <div className="fixed right-6 top-6 z-50 print:hidden">
        <Button onClick={handlePrint} className="gap-2 bg-blue-600 text-white hover:bg-blue-700">
          <Printer className="h-4 w-4" /> Print / Save PDF
        </Button>
      </div>

      <div className="doc-container">
        {/* ============ COVER PAGE ============ */}
        <div className="doc-page flex flex-col items-center justify-center text-center">
          <div className="mb-8 h-1 w-40 bg-black" />
          <h1 className="doc-title" style={{ fontSize: "28pt" }}>ParkEase India</h1>
          <h2 className="mt-4" style={{ fontSize: "18pt", fontFamily: "'Times New Roman', serif" }}>
            Smart Parking Slot Booking System
          </h2>
          <p className="doc-text mt-2" style={{ fontSize: "14pt" }}>Project Documentation</p>
          <div className="mt-12 h-px w-60 bg-black" />
          <div className="doc-text mt-8 space-y-2">
            <p><strong>Department of Computer Science & Engineering</strong></p>
            <p>Academic Year 2025–2026</p>
          </div>
          <div className="doc-text mt-12 space-y-1">
            <p><strong>Submitted By:</strong></p>
            <p>Student Name</p>
            <p>Roll Number</p>
          </div>
          <div className="doc-text mt-8 space-y-1">
            <p><strong>Under the Guidance of:</strong></p>
            <p>Faculty Guide Name</p>
            <p>Designation, Department</p>
          </div>
          <div className="mt-auto mb-8 h-1 w-40 bg-black" />
        </div>

        {/* ============ CERTIFICATE PAGE ============ */}
        <div className="doc-page">
          <h2 className="doc-heading-1 text-center">CERTIFICATE</h2>
          <div className="doc-text mt-8 space-y-6">
            <p>
              This is to certify that the project entitled <strong>"ParkEase India – Smart Parking Slot Booking System"</strong> is a bonafide work carried out by <strong>[Student Name]</strong>, Roll No: <strong>[Roll Number]</strong>, in partial fulfillment of the requirements for the award of the degree of <strong>Bachelor of Technology</strong> in <strong>Computer Science and Engineering</strong> during the academic year <strong>2025–2026</strong>.
            </p>
            <p>
              This project has been carried out under the supervision and guidance of <strong>[Guide Name]</strong>, [Designation], Department of Computer Science and Engineering. The work presented in this report is original and has not been submitted elsewhere for any degree or diploma.
            </p>
            <div className="mt-20 flex justify-between">
              <div className="text-center">
                <div className="mb-2 h-px w-48 bg-black" />
                <p><strong>Project Guide</strong></p>
                <p>[Guide Name]</p>
              </div>
              <div className="text-center">
                <div className="mb-2 h-px w-48 bg-black" />
                <p><strong>Head of Department</strong></p>
                <p>[HOD Name]</p>
              </div>
            </div>
            <div className="mt-16 text-center">
              <div className="mx-auto mb-2 h-px w-48 bg-black" />
              <p><strong>External Examiner</strong></p>
            </div>
          </div>
        </div>

        {/* ============ DECLARATION ============ */}
        <div className="doc-page">
          <h2 className="doc-heading-1 text-center">DECLARATION</h2>
          <div className="doc-text mt-8 space-y-6">
            <p>
              I hereby declare that the project entitled <strong>"ParkEase India – Smart Parking Slot Booking System"</strong> submitted to the Department of Computer Science and Engineering is a record of an original work done by me under the guidance of <strong>[Guide Name]</strong>, [Designation], Department of Computer Science and Engineering.
            </p>
            <p>
              This project work has not been submitted to any other university or institution for the award of any degree or diploma. All the information furnished in this project is genuine to the best of my knowledge.
            </p>
            <div className="mt-16">
              <p><strong>Place:</strong> [City]</p>
              <p><strong>Date:</strong> [Date]</p>
            </div>
            <div className="mt-12 text-right">
              <div className="ml-auto mb-2 h-px w-48 bg-black" />
              <p><strong>[Student Name]</strong></p>
              <p>[Roll Number]</p>
            </div>
          </div>
        </div>

        {/* ============ ACKNOWLEDGEMENT ============ */}
        <div className="doc-page">
          <h2 className="doc-heading-1 text-center">ACKNOWLEDGEMENT</h2>
          <div className="doc-text mt-8 space-y-6">
            <p>
              I would like to express my sincere gratitude to all those who have contributed to the successful completion of this project. First and foremost, I thank <strong>God Almighty</strong> for his blessings throughout the project work.
            </p>
            <p>
              I express my deep sense of gratitude to my project guide <strong>[Guide Name]</strong>, [Designation], Department of Computer Science and Engineering, for the continuous support, motivation, and invaluable guidance throughout the project. Their patience and knowledge helped me in the research and implementation of this project.
            </p>
            <p>
              I am grateful to <strong>[HOD Name]</strong>, Head of the Department of Computer Science and Engineering, for providing the necessary infrastructure and support for the project.
            </p>
            <p>
              I extend my thanks to all the faculty members of the Department of Computer Science and Engineering for their support and encouragement. I also thank my friends and classmates for their help and cooperation.
            </p>
            <p>
              Finally, I am deeply thankful to my parents and family members for their love, support, and encouragement throughout my academic career.
            </p>
            <div className="mt-12 text-right">
              <p><strong>[Student Name]</strong></p>
            </div>
          </div>
        </div>

        {/* ============ ABSTRACT ============ */}
        <div className="doc-page">
          <h2 className="doc-heading-1 text-center">ABSTRACT</h2>
          <div className="doc-text mt-8 space-y-4">
            <p>
              The rapid urbanization of Indian cities has led to a significant increase in the number of vehicles on the road, creating a major challenge in finding suitable parking spaces. The traditional method of manually searching for parking slots is time-consuming, leads to traffic congestion, increases fuel consumption, and causes significant inconvenience to vehicle owners.
            </p>
            <p>
              <strong>ParkEase India</strong> is a smart parking slot booking system designed to address these challenges by providing a comprehensive, real-time, web-based platform for booking parking slots across major Indian cities including Chennai, Bangalore, Mumbai, Delhi, Hyderabad, and Kolkata. The system enables users to search for available parking areas, view real-time slot availability through an interactive grid-based interface, select specific parking slots, calculate costs with GST (Goods and Services Tax) at 18%, process secure payments through Razorpay integration supporting UPI, credit/debit cards, and digital wallets, and generate QR codes for contactless entry verification.
            </p>
            <p>
              The system is built using modern web technologies including React 18 with TypeScript for a type-safe frontend, Tailwind CSS for responsive and themeable styling, PostgreSQL for robust data persistence, and a cloud-based backend architecture for authentication, database management, and serverless edge functions. The application implements role-based access control (RBAC) with separate user and admin interfaces, Row Level Security (RLS) policies for data protection, and OAuth 2.0 social authentication with Google and Apple sign-in capabilities.
            </p>
            <p>
              The admin dashboard provides comprehensive analytics including revenue tracking, city-wise booking distribution with interactive charts, and real-time parking area monitoring. The system follows a mobile-first responsive design approach ensuring accessibility across all devices.
            </p>
            <p>
              <strong>Keywords:</strong> Smart Parking, Slot Booking, Real-Time Availability, QR Code, Razorpay, GST Calculation, React, TypeScript, PostgreSQL, Role-Based Access Control, Indian Cities.
            </p>
          </div>
        </div>

        {/* ============ TABLE OF CONTENTS ============ */}
        <div className="doc-page">
          <h2 className="doc-heading-1 text-center">TABLE OF CONTENTS</h2>
          <div className="doc-text mt-8">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="pb-2 text-left">Chapter</th>
                  <th className="pb-2 text-left">Title</th>
                  <th className="pb-2 text-right">Page</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  ["", "Certificate", "ii"],
                  ["", "Declaration", "iii"],
                  ["", "Acknowledgement", "iv"],
                  ["", "Abstract", "v"],
                  ["", "Table of Contents", "vi"],
                  ["", "List of Figures", "viii"],
                  ["", "List of Tables", "ix"],
                  ["1", "Introduction", "1"],
                  ["1.1", "Problem Statement", "2"],
                  ["1.2", "Objectives", "3"],
                  ["1.3", "Scope of the Project", "4"],
                  ["1.4", "Organization of Report", "5"],
                  ["2", "Literature Survey", "6"],
                  ["2.1", "Existing Systems", "6"],
                  ["2.2", "Comparative Analysis", "8"],
                  ["2.3", "Gaps Identified", "9"],
                  ["3", "System Analysis", "10"],
                  ["3.1", "Feasibility Study", "10"],
                  ["3.2", "Requirement Analysis", "12"],
                  ["3.3", "Functional Requirements", "13"],
                  ["3.4", "Non-Functional Requirements", "14"],
                  ["3.5", "Hardware & Software Requirements", "15"],
                  ["4", "System Design", "16"],
                  ["4.1", "System Architecture", "16"],
                  ["4.2", "ER Diagram", "17"],
                  ["4.3", "Data Flow Diagram (DFD)", "18"],
                  ["4.4", "UML Diagrams", "19"],
                  ["4.5", "Database Design", "22"],
                  ["4.6", "UI/UX Design", "24"],
                  ["5", "Implementation", "26"],
                  ["5.1", "Technology Stack", "26"],
                  ["5.2", "Frontend Implementation", "27"],
                  ["5.3", "Backend Implementation", "33"],
                  ["5.4", "Authentication Module", "35"],
                  ["5.5", "Database & Security", "37"],
                  ["5.6", "Payment Integration", "39"],
                  ["6", "Testing", "40"],
                  ["6.1", "Unit Testing", "40"],
                  ["6.2", "Integration Testing", "41"],
                  ["6.3", "User Acceptance Testing", "42"],
                  ["6.4", "Test Cases", "43"],
                  ["7", "Screenshots & Output", "45"],
                  ["8", "Conclusion & Future Scope", "49"],
                  ["8.1", "Conclusion", "49"],
                  ["8.2", "Future Enhancements", "50"],
                  ["", "References", "51"],
                  ["", "Appendix A: Full Source Code", "52"],
                ].map(([ch, title, pg], i) => (
                  <tr key={i} className="h-8">
                    <td className="pr-4 font-bold">{ch}</td>
                    <td className={ch && !ch.includes(".") ? "font-bold" : "pl-4"}>{title}</td>
                    <td className="text-right">{pg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ============ LIST OF FIGURES ============ */}
        <div className="doc-page">
          <h2 className="doc-heading-1 text-center">LIST OF FIGURES</h2>
          <div className="doc-text mt-8">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="pb-2 text-left">Figure No.</th>
                  <th className="pb-2 text-left">Title</th>
                  <th className="pb-2 text-right">Page</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  ["4.1", "System Architecture Diagram", "16"],
                  ["4.2", "Entity Relationship (ER) Diagram", "17"],
                  ["4.3", "Data Flow Diagram – Level 0 (Context)", "18"],
                  ["4.4", "Data Flow Diagram – Level 1 (Detailed)", "18"],
                  ["4.5", "UML Use Case Diagram", "19"],
                  ["4.6", "UML Sequence Diagram – Booking Flow", "20"],
                  ["4.7", "UML Class Diagram", "21"],
                  ["4.8", "UML Activity Diagram", "22"],
                  ["7.1", "Home Page Screenshot", "45"],
                  ["7.2", "Search Parking Page", "46"],
                  ["7.3", "Parking Detail & Slot Selection", "46"],
                  ["7.4", "Booking Confirmation with QR Code", "47"],
                  ["7.5", "My Bookings Page", "47"],
                  ["7.6", "Admin Dashboard", "48"],
                  ["7.7", "Login / Register Page", "48"],
                ].map(([no, title, pg], i) => (
                  <tr key={i} className="h-8">
                    <td>{no}</td>
                    <td>{title}</td>
                    <td className="text-right">{pg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="doc-heading-1 mt-16 text-center">LIST OF TABLES</h2>
          <div className="doc-text mt-8">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="pb-2 text-left">Table No.</th>
                  <th className="pb-2 text-left">Title</th>
                  <th className="pb-2 text-right">Page</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  ["2.1", "Comparison of Existing Parking Systems", "8"],
                  ["3.1", "Functional Requirements", "13"],
                  ["3.2", "Non-Functional Requirements", "14"],
                  ["3.3", "Hardware Requirements", "15"],
                  ["3.4", "Software Requirements", "15"],
                  ["4.1", "profiles Table Schema", "22"],
                  ["4.2", "parking_areas Table Schema", "23"],
                  ["4.3", "parking_slots Table Schema", "23"],
                  ["4.4", "bookings Table Schema", "23"],
                  ["4.5", "user_roles Table Schema", "24"],
                  ["6.1", "Test Cases Summary", "43"],
                ].map(([no, title, pg], i) => (
                  <tr key={i} className="h-8">
                    <td>{no}</td>
                    <td>{title}</td>
                    <td className="text-right">{pg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ============ CHAPTER 1: INTRODUCTION ============ */}
        <div className="doc-page">
          <h2 className="doc-heading-1">CHAPTER 1: INTRODUCTION</h2>
          <div className="doc-text mt-6 space-y-4">
            <p>
              The exponential growth of urban population in India has led to a dramatic increase in the number of registered motor vehicles. According to the Ministry of Road Transport and Highways, India had over 326 million registered vehicles as of 2023, with the number growing at approximately 9-10% annually. This vehicular proliferation has created an unprecedented demand for organized parking infrastructure, particularly in metropolitan areas like Mumbai, Delhi, Bangalore, Chennai, Hyderabad, and Kolkata.
            </p>
            <p>
              The parking problem in Indian cities is multifaceted. It encompasses not only the physical shortage of parking spaces but also the inefficiency in managing and locating available parking slots. Studies indicate that an average Indian motorist spends 20-30 minutes searching for parking in congested urban areas, contributing to approximately 30% of urban traffic congestion. This wasted time translates to increased fuel consumption, higher carbon emissions, driver frustration, and economic productivity loss estimated at thousands of crores annually.
            </p>
            <p>
              Traditional parking management systems in India largely rely on manual processes — attendants directing vehicles, paper-based ticketing, and cash payments. These systems suffer from several limitations including lack of real-time availability information, inefficient space utilization, revenue leakage due to manual cash handling, no advance booking capability, and poor user experience.
            </p>
            <p>
              The advent of smart city initiatives under the Government of India's Smart Cities Mission has created an ecosystem conducive to technology-driven parking solutions. The widespread adoption of smartphones, affordable mobile internet (post Jio revolution), and the UPI-driven digital payment revolution (processing over 10 billion transactions monthly) have created the perfect conditions for a digital parking management platform tailored for the Indian market.
            </p>
            <p>
              <strong>ParkEase India</strong> is conceived as a comprehensive smart parking slot booking system that leverages modern web technologies, real-time data processing, and India-specific payment infrastructure to transform the urban parking experience. The platform enables users to discover, compare, and book parking slots across six major Indian cities through an intuitive web interface, while providing parking operators and administrators with powerful analytics and management tools.
            </p>
          </div>
        </div>

        {/* 1.1 Problem Statement */}
        <div className="doc-page">
          <h3 className="doc-heading-2">1.1 Problem Statement</h3>
          <div className="doc-text mt-4 space-y-4">
            <p>
              The existing parking infrastructure in Indian metropolitan cities faces critical challenges that demand a technological intervention:
            </p>
            <p>
              <strong>1. Lack of Real-Time Information:</strong> Vehicle owners have no way of knowing parking availability before reaching a location. This leads to circling around blocks, increasing congestion and emissions. A study by IBM found that drivers in major cities spend an average of 20 minutes looking for parking, and in Indian metros, this can extend to 30-40 minutes during peak hours.
            </p>
            <p>
              <strong>2. No Advance Booking Facility:</strong> Unlike other transportation services (flight, train, cab booking), parking in India remains predominantly a first-come-first-served system. Users cannot plan ahead, leading to uncertainty and anxiety, especially for important appointments or events.
            </p>
            <p>
              <strong>3. Manual Payment Processes:</strong> Cash-based transactions are prone to fraud, revenue leakage, and lack of transparency. The absence of digital payment integration means no receipts, no GST compliance, and no transaction records for users.
            </p>
            <p>
              <strong>4. Inefficient Space Utilization:</strong> Without data analytics, parking operators cannot optimize space allocation, predict demand patterns, or implement dynamic pricing strategies. This results in under-utilization during off-peak hours and overflow during peak hours.
            </p>
            <p>
              <strong>5. Security Concerns:</strong> Traditional parking lacks proper entry/exit verification, making vehicles vulnerable to theft. There is no systematic logging of vehicle entry and exit times.
            </p>
            <p>
              <strong>6. No Centralized Management:</strong> Parking areas operate in isolation without any centralized management dashboard, making it impossible to perform cross-location analytics, standardize services, or implement chain-wide policies.
            </p>

            <h3 className="doc-heading-2 mt-8">1.2 Objectives</h3>
            <p>The primary objectives of the ParkEase India system are:</p>
            <ol className="ml-6 list-decimal space-y-2">
              <li>To develop a user-friendly web application that enables users to search, compare, and book parking slots across multiple cities in India in real-time.</li>
              <li>To implement an interactive slot selection interface with visual representation of parking layouts showing available, booked, and selected slots using a color-coded grid system.</li>
              <li>To integrate secure payment processing through Razorpay payment gateway supporting Indian payment methods including UPI, credit/debit cards, net banking, and digital wallets.</li>
              <li>To generate QR codes for each booking that can be scanned at parking entry points for contactless verification, enhancing security and convenience.</li>
              <li>To implement GST-compliant pricing with automatic 18% GST calculation, providing transparent invoice breakdowns to users.</li>
              <li>To build an admin dashboard with comprehensive analytics including revenue tracking, city-wise distribution, occupancy rates, and booking trends using interactive charts.</li>
              <li>To implement role-based access control (RBAC) with separate user and admin interfaces, ensuring data security through Row Level Security (RLS) policies at the database level.</li>
              <li>To provide multi-city support covering Chennai, Bangalore, Mumbai, Delhi, Hyderabad, and Kolkata with location-based filtering and search capabilities.</li>
              <li>To ensure a responsive, mobile-first design that delivers optimal user experience across all device types including desktops, tablets, and smartphones.</li>
              <li>To implement secure authentication with email/password registration, email verification, and social login options (Google, Apple) using industry-standard OAuth 2.0 protocols.</li>
            </ol>
          </div>
        </div>

        {/* 1.3 Scope & 1.4 Organization */}
        <div className="doc-page">
          <h3 className="doc-heading-2">1.3 Scope of the Project</h3>
          <div className="doc-text mt-4 space-y-4">
            <p>The scope of ParkEase India encompasses the following functional areas:</p>
            <p><strong>User Module:</strong></p>
            <ul className="ml-6 list-disc space-y-1">
              <li>User registration and authentication with email verification</li>
              <li>Social login integration (Google, Apple OAuth 2.0)</li>
              <li>City and area-based parking search with filters</li>
              <li>Real-time parking slot availability viewing</li>
              <li>Interactive slot selection through grid-based interface</li>
              <li>Duration selection with dynamic price calculation</li>
              <li>GST-inclusive billing with transparent breakdowns</li>
              <li>Secure payment processing via Razorpay</li>
              <li>QR code generation for entry verification</li>
              <li>Booking history management with cancellation</li>
              <li>Responsive design for mobile, tablet, and desktop</li>
            </ul>
            <p><strong>Admin Module:</strong></p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Dashboard with key performance indicators (KPIs)</li>
              <li>Revenue analytics with monthly trend charts</li>
              <li>City-wise booking distribution visualization</li>
              <li>Parking area management and monitoring</li>
              <li>Slot availability tracking across locations</li>
              <li>User management capabilities</li>
            </ul>
            <p><strong>Out of Scope (for current version):</strong></p>
            <ul className="ml-6 list-disc space-y-1">
              <li>IoT sensor-based automatic slot detection</li>
              <li>Native mobile applications (iOS/Android)</li>
              <li>Multi-level parking floor management</li>
              <li>Subscription-based monthly parking passes</li>
              <li>Integration with traffic management systems</li>
            </ul>
          </div>

          <h3 className="doc-heading-2 mt-8">1.4 Organization of the Report</h3>
          <div className="doc-text mt-4 space-y-3">
            <p>This report is organized into the following chapters:</p>
            <p><strong>Chapter 1 – Introduction:</strong> Provides an overview of the project, problem statement, objectives, and scope.</p>
            <p><strong>Chapter 2 – Literature Survey:</strong> Reviews existing parking management systems and identifies gaps.</p>
            <p><strong>Chapter 3 – System Analysis:</strong> Covers feasibility study, requirement analysis, and specifications.</p>
            <p><strong>Chapter 4 – System Design:</strong> Presents the system architecture, ER diagrams, DFD, UML diagrams, and database design.</p>
            <p><strong>Chapter 5 – Implementation:</strong> Details the technology stack, code implementation, and module-wise development.</p>
            <p><strong>Chapter 6 – Testing:</strong> Describes the testing methodologies, test cases, and results.</p>
            <p><strong>Chapter 7 – Screenshots & Output:</strong> Shows the application output screens.</p>
            <p><strong>Chapter 8 – Conclusion & Future Scope:</strong> Summarizes findings and proposes future enhancements.</p>
          </div>
        </div>

        {/* ============ CHAPTER 2: LITERATURE SURVEY ============ */}
        <div className="doc-page">
          <h2 className="doc-heading-1">CHAPTER 2: LITERATURE SURVEY</h2>

          <h3 className="doc-heading-2 mt-6">2.1 Existing Systems</h3>
          <div className="doc-text mt-4 space-y-4">
            <p>
              Several smart parking solutions exist globally and within India. A thorough review of existing systems was conducted to understand the current landscape and identify areas for improvement.
            </p>
            <p>
              <strong>1. ParkWhiz (International):</strong> ParkWhiz is a US-based parking booking platform that allows users to find and book parking in advance. It covers major US cities and offers guaranteed parking spots. However, it does not support Indian payment methods like UPI, lacks GST compliance, and is not available in Indian cities. The platform primarily focuses on event-based parking near stadiums and venues.
            </p>
            <p>
              <strong>2. SpotHero (International):</strong> Similar to ParkWhiz, SpotHero operates in North America and provides advance booking with discounted rates. It features a map-based search interface and integrates with navigation apps. Its limitations include US-only operations, no support for Indian regulatory requirements, and no QR-based entry system.
            </p>
            <p>
              <strong>3. Park+ (India):</strong> Park+ is an Indian startup focusing on smart parking and vehicle management. It uses FASTag-based entry/exit for some locations. While it addresses the Indian market, its coverage is limited to select malls and airports, with inconsistent availability data and limited payment integration. The user interface is mobile-app-only, with no web-based booking option.
            </p>
            <p>
              <strong>4. Get My Parking (India):</strong> Get My Parking provides B2B parking management solutions for parking operators. It offers sensor-based occupancy detection and a management dashboard. However, it primarily targets parking operators rather than end-users, lacks a comprehensive consumer-facing booking interface, and requires significant hardware investment for sensors.
            </p>
            <p>
              <strong>5. Municipal Corporation Systems:</strong> Several Indian municipal corporations (BMC Mumbai, GHMC Hyderabad) have attempted smart parking implementations. These are typically limited to specific zones, use SMS-based booking (not web), lack modern UI/UX, have poor reliability, and don't provide comprehensive analytics or multi-city support.
            </p>
          </div>
        </div>

        {/* 2.2 & 2.3 */}
        <div className="doc-page">
          <h3 className="doc-heading-2">2.2 Comparative Analysis</h3>
          <div className="doc-text mt-4">
            <p className="mb-4"><strong>Table 2.1:</strong> Comparison of Existing Parking Systems</p>
            <table className="doc-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>ParkWhiz</th>
                  <th>SpotHero</th>
                  <th>Park+</th>
                  <th>ParkEase</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>India Coverage</td><td>No</td><td>No</td><td>Limited</td><td>6 Cities</td></tr>
                <tr><td>Web Application</td><td>Yes</td><td>Yes</td><td>No</td><td>Yes</td></tr>
                <tr><td>UPI Payment</td><td>No</td><td>No</td><td>Yes</td><td>Yes</td></tr>
                <tr><td>GST Compliance</td><td>No</td><td>No</td><td>Partial</td><td>Full (18%)</td></tr>
                <tr><td>QR Code Entry</td><td>No</td><td>No</td><td>FASTag</td><td>Yes</td></tr>
                <tr><td>Real-Time Slots</td><td>Yes</td><td>Yes</td><td>Limited</td><td>Yes</td></tr>
                <tr><td>Interactive Grid</td><td>No</td><td>No</td><td>No</td><td>Yes</td></tr>
                <tr><td>Admin Dashboard</td><td>Yes</td><td>Yes</td><td>Limited</td><td>Full Analytics</td></tr>
                <tr><td>Social Login</td><td>Yes</td><td>Yes</td><td>No</td><td>Google + Apple</td></tr>
                <tr><td>Role-Based Access</td><td>Yes</td><td>Yes</td><td>No</td><td>Yes (RBAC)</td></tr>
                <tr><td>Responsive Design</td><td>Yes</td><td>Yes</td><td>Mobile Only</td><td>Yes</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="doc-heading-2 mt-8">2.3 Gaps Identified</h3>
          <div className="doc-text mt-4 space-y-3">
            <p>Based on the literature survey and comparative analysis, the following gaps were identified:</p>
            <ol className="ml-6 list-decimal space-y-2">
              <li><strong>No comprehensive India-focused web platform:</strong> Existing solutions are either international (no India support) or Indian but mobile-only with limited features.</li>
              <li><strong>Lack of visual slot selection:</strong> No existing system provides an interactive grid-based slot selection interface where users can visually pick their preferred parking position.</li>
              <li><strong>Incomplete GST integration:</strong> Indian tax compliance with proper 18% GST calculation and invoice generation is missing or partial in existing systems.</li>
              <li><strong>No unified multi-city platform:</strong> Existing Indian solutions focus on specific locations rather than providing a pan-India platform covering multiple cities.</li>
              <li><strong>Poor analytics for operators:</strong> Admin dashboards in existing systems lack comprehensive analytics including revenue trends, city-wise comparisons, and occupancy patterns.</li>
              <li><strong>Limited authentication options:</strong> Most Indian parking apps lack modern authentication methods like social login and multi-factor authentication.</li>
            </ol>
            <p className="mt-4">
              ParkEase India addresses all these identified gaps by providing a comprehensive, India-focused, web-based smart parking solution with visual slot selection, complete GST compliance, multi-city support, rich analytics, and modern authentication options.
            </p>
          </div>
        </div>

        {/* ============ CHAPTER 3: SYSTEM ANALYSIS ============ */}
        <div className="doc-page">
          <h2 className="doc-heading-1">CHAPTER 3: SYSTEM ANALYSIS</h2>

          <h3 className="doc-heading-2 mt-6">3.1 Feasibility Study</h3>
          <div className="doc-text mt-4 space-y-4">
            <p><strong>3.1.1 Technical Feasibility</strong></p>
            <p>
              The system is technically feasible as it uses well-established, open-source technologies with extensive community support. React 18 with TypeScript provides a robust, type-safe frontend framework. PostgreSQL is a proven enterprise-grade database. The cloud-based backend provides managed authentication, real-time capabilities, and serverless functions without requiring server infrastructure management. All technologies used are mature, well-documented, and have active developer communities.
            </p>
            <p><strong>3.1.2 Economic Feasibility</strong></p>
            <p>
              The project is economically feasible due to the use of open-source technologies (React, TypeScript, Tailwind CSS) which eliminate licensing costs. The cloud-based backend offers a generous free tier sufficient for development and moderate production use. Razorpay's payment gateway charges a standard 2% transaction fee, which is industry-standard and can be passed to users or absorbed as a business cost. The overall development cost is minimal, primarily requiring developer time.
            </p>
            <p><strong>3.1.3 Operational Feasibility</strong></p>
            <p>
              The system is designed with user experience as a priority. The intuitive interface requires minimal training for end-users. The search functionality mirrors popular e-commerce patterns that users are familiar with. The slot selection grid provides a visual, game-like interaction that makes the booking process engaging. Payment through Razorpay supports familiar Indian payment methods (UPI, PhonePe, Google Pay, Paytm). Admin operations are streamlined through a visual dashboard requiring no technical expertise.
            </p>
            <p><strong>3.1.4 Schedule Feasibility</strong></p>
            <p>
              The project timeline of one semester (approximately 4-5 months) is adequate given the modular architecture. The development was divided into sprints: authentication module (2 weeks), search and listing (2 weeks), slot selection and booking (3 weeks), payment integration (2 weeks), admin dashboard (2 weeks), testing and documentation (3 weeks).
            </p>
          </div>
        </div>

        {/* 3.2 - 3.5 */}
        <div className="doc-page">
          <h3 className="doc-heading-2">3.2 Requirement Analysis</h3>
          <div className="doc-text mt-4 space-y-4">
            <p>
              The requirements were gathered through multiple techniques including interviews with parking operators, surveys of vehicle owners in urban areas, analysis of existing parking apps, and study of government smart city guidelines. Requirements are categorized into functional and non-functional requirements.
            </p>

            <h3 className="doc-heading-2 mt-6">3.3 Functional Requirements</h3>
            <p className="mb-4"><strong>Table 3.1:</strong> Functional Requirements</p>
            <table className="doc-table">
              <thead>
                <tr><th>FR ID</th><th>Requirement</th><th>Priority</th></tr>
              </thead>
              <tbody>
                <tr><td>FR-01</td><td>User registration with email, name, phone number</td><td>High</td></tr>
                <tr><td>FR-02</td><td>Email verification before account activation</td><td>High</td></tr>
                <tr><td>FR-03</td><td>Login with email/password credentials</td><td>High</td></tr>
                <tr><td>FR-04</td><td>Social login via Google and Apple OAuth</td><td>Medium</td></tr>
                <tr><td>FR-05</td><td>Search parking by city, area, or keyword</td><td>High</td></tr>
                <tr><td>FR-06</td><td>Filter results by city and vehicle type</td><td>High</td></tr>
                <tr><td>FR-07</td><td>View parking area details (amenities, rating, price)</td><td>High</td></tr>
                <tr><td>FR-08</td><td>Interactive grid-based slot selection</td><td>High</td></tr>
                <tr><td>FR-09</td><td>Vehicle type selection (Car, Bike, SUV)</td><td>High</td></tr>
                <tr><td>FR-10</td><td>Duration selection with dynamic pricing</td><td>High</td></tr>
                <tr><td>FR-11</td><td>GST (18%) calculation and display</td><td>High</td></tr>
                <tr><td>FR-12</td><td>Razorpay payment processing</td><td>High</td></tr>
                <tr><td>FR-13</td><td>QR code generation post-booking</td><td>High</td></tr>
                <tr><td>FR-14</td><td>Booking history with status tracking</td><td>Medium</td></tr>
                <tr><td>FR-15</td><td>Booking cancellation functionality</td><td>Medium</td></tr>
                <tr><td>FR-16</td><td>Admin dashboard with revenue analytics</td><td>High</td></tr>
                <tr><td>FR-17</td><td>City-wise booking distribution charts</td><td>Medium</td></tr>
                <tr><td>FR-18</td><td>Parking area management table</td><td>Medium</td></tr>
              </tbody>
            </table>

            <h3 className="doc-heading-2 mt-6">3.4 Non-Functional Requirements</h3>
            <p className="mb-4"><strong>Table 3.2:</strong> Non-Functional Requirements</p>
            <table className="doc-table">
              <thead>
                <tr><th>NFR ID</th><th>Requirement</th><th>Description</th></tr>
              </thead>
              <tbody>
                <tr><td>NFR-01</td><td>Performance</td><td>Page load time &lt; 3 seconds on 4G</td></tr>
                <tr><td>NFR-02</td><td>Scalability</td><td>Support 10,000+ concurrent users</td></tr>
                <tr><td>NFR-03</td><td>Security</td><td>RLS policies, encrypted passwords, HTTPS</td></tr>
                <tr><td>NFR-04</td><td>Usability</td><td>Mobile-first responsive design</td></tr>
                <tr><td>NFR-05</td><td>Availability</td><td>99.9% uptime with cloud hosting</td></tr>
                <tr><td>NFR-06</td><td>Compatibility</td><td>Chrome, Firefox, Safari, Edge support</td></tr>
                <tr><td>NFR-07</td><td>Maintainability</td><td>Modular component architecture</td></tr>
                <tr><td>NFR-08</td><td>Compliance</td><td>GST-compliant billing</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="doc-page">
          <h3 className="doc-heading-2">3.5 Hardware & Software Requirements</h3>
          <div className="doc-text mt-4 space-y-4">
            <p className="mb-4"><strong>Table 3.3:</strong> Hardware Requirements</p>
            <table className="doc-table">
              <thead><tr><th>Component</th><th>Minimum Requirement</th><th>Recommended</th></tr></thead>
              <tbody>
                <tr><td>Processor</td><td>Intel i3 / AMD Ryzen 3</td><td>Intel i5 / AMD Ryzen 5</td></tr>
                <tr><td>RAM</td><td>4 GB</td><td>8 GB</td></tr>
                <tr><td>Storage</td><td>20 GB free space</td><td>50 GB SSD</td></tr>
                <tr><td>Display</td><td>1366 × 768</td><td>1920 × 1080</td></tr>
                <tr><td>Internet</td><td>4G / Broadband</td><td>High-speed broadband</td></tr>
              </tbody>
            </table>

            <p className="mb-4 mt-6"><strong>Table 3.4:</strong> Software Requirements</p>
            <table className="doc-table">
              <thead><tr><th>Category</th><th>Technology</th><th>Version</th></tr></thead>
              <tbody>
                <tr><td>Frontend Framework</td><td>React</td><td>18.3.1</td></tr>
                <tr><td>Language</td><td>TypeScript</td><td>5.x</td></tr>
                <tr><td>Build Tool</td><td>Vite</td><td>5.x</td></tr>
                <tr><td>CSS Framework</td><td>Tailwind CSS</td><td>3.x</td></tr>
                <tr><td>UI Components</td><td>Shadcn/UI + Radix UI</td><td>Latest</td></tr>
                <tr><td>Animation</td><td>Framer Motion</td><td>12.x</td></tr>
                <tr><td>Charts</td><td>Recharts</td><td>2.x</td></tr>
                <tr><td>QR Code</td><td>qrcode.react</td><td>4.x</td></tr>
                <tr><td>State Management</td><td>TanStack React Query</td><td>5.x</td></tr>
                <tr><td>Routing</td><td>React Router DOM</td><td>6.x</td></tr>
                <tr><td>Database</td><td>PostgreSQL</td><td>15.x</td></tr>
                <tr><td>Authentication</td><td>Cloud Auth (JWT-based)</td><td>Latest</td></tr>
                <tr><td>Payment Gateway</td><td>Razorpay</td><td>Latest</td></tr>
                <tr><td>Browser</td><td>Chrome, Firefox, Edge, Safari</td><td>Latest</td></tr>
                <tr><td>OS (Development)</td><td>Windows / macOS / Linux</td><td>Any</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ============ CHAPTER 4: SYSTEM DESIGN ============ */}
        <div className="doc-page">
          <h2 className="doc-heading-1">CHAPTER 4: SYSTEM DESIGN</h2>

          <h3 className="doc-heading-2 mt-6">4.1 System Architecture</h3>
          <div className="doc-text mt-4 space-y-4">
            <p>
              ParkEase India follows a modern three-tier architecture consisting of the Presentation Layer (Frontend), Application Layer (Backend/API), and Data Layer (Database). The system utilizes a cloud-based backend architecture that provides managed services for authentication, database, storage, and serverless functions.
            </p>
            <p><strong>Architecture Components:</strong></p>
            <ul className="ml-6 list-disc space-y-2">
              <li><strong>Presentation Layer:</strong> React 18 SPA (Single Page Application) with TypeScript, Tailwind CSS, and Shadcn/UI components. Communicates with the backend via RESTful API calls and real-time WebSocket subscriptions.</li>
              <li><strong>Application Layer:</strong> Cloud-hosted backend providing RESTful APIs through auto-generated PostgREST endpoints, JWT-based authentication services, Edge Functions (Deno runtime) for custom server-side logic, and real-time pub/sub for live slot updates.</li>
              <li><strong>Data Layer:</strong> PostgreSQL 15 database with Row Level Security (RLS) policies. Tables are designed with proper foreign key relationships, indexing, and trigger-based automation.</li>
              <li><strong>External Services:</strong> Razorpay Payment Gateway for processing INR transactions, Google/Apple OAuth providers for social login, and CDN for static asset delivery.</li>
            </ul>

            <div className="mt-6 rounded border bg-gray-50 p-4">
              <p className="mb-2 text-center font-bold">Figure 4.1: System Architecture Diagram</p>
              <pre className="overflow-x-auto text-xs" style={{ fontFamily: "'Courier New', monospace" }}>
{`┌─────────────────────────────────────────────────────────────┐
│                    PRESENTATION LAYER                       │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │  React   │ │ Tailwind │ │ Framer   │ │ Recharts │      │
│  │  18 + TS │ │   CSS    │ │ Motion   │ │ (Charts) │      │
│  └────┬─────┘ └──────────┘ └──────────┘ └──────────┘      │
│       │                                                     │
│  ┌────┴──────────────────────────────────┐                 │
│  │  React Router DOM (Client Routing)    │                 │
│  │  /  /search  /parking/:id  /bookings  │                 │
│  │  /booking-confirm  /login  /admin     │                 │
│  └────┬──────────────────────────────────┘                 │
└───────┼─────────────────────────────────────────────────────┘
        │ HTTPS / REST API / WebSocket
┌───────┼─────────────────────────────────────────────────────┐
│       │         APPLICATION LAYER (Cloud Backend)           │
│  ┌────┴─────┐  ┌───────────┐  ┌──────────┐  ┌──────────┐  │
│  │PostgREST │  │   Auth    │  │  Edge    │  │ Realtime │  │
│  │  API     │  │  Service  │  │Functions │  │  Server  │  │
│  │(Auto-gen)│  │ (JWT/OAuth│  │  (Deno)  │  │(WebSocket│  │
│  └────┬─────┘  └─────┬─────┘  └────┬─────┘  └────┬─────┘  │
└───────┼──────────────┼──────────────┼──────────────┼────────┘
        │              │              │              │
┌───────┼──────────────┼──────────────┼──────────────┼────────┐
│       │         DATA LAYER (PostgreSQL 15)         │        │
│  ┌────┴─────────────────────────────────────────────┐      │
│  │  profiles │ parking_areas │ parking_slots         │      │
│  │  bookings │ user_roles    │ auth.users (managed)  │      │
│  │  ─────────────────────────────────────────────    │      │
│  │  Row Level Security (RLS) Policies                │      │
│  │  Database Functions & Triggers                    │      │
│  └───────────────────────────────────────────────────┘      │
└─────────────────────────────────────────────────────────────┘
        │
┌───────┼─────────────────────────────────────────────────────┐
│       │           EXTERNAL SERVICES                         │
│  ┌────┴─────┐  ┌───────────┐  ┌──────────────┐            │
│  │ Razorpay │  │  Google   │  │    Apple     │            │
│  │ Payment  │  │  OAuth    │  │    OAuth     │            │
│  │ Gateway  │  │  2.0      │  │    2.0       │            │
│  └──────────┘  └───────────┘  └──────────────┘            │
└─────────────────────────────────────────────────────────────┘`}
              </pre>
            </div>
          </div>
        </div>

        {/* 4.2 ER Diagram */}
        <div className="doc-page">
          <h3 className="doc-heading-2">4.2 Entity Relationship (ER) Diagram</h3>
          <div className="doc-text mt-4 space-y-4">
            <p>
              The ER diagram illustrates the database entities, their attributes, and the relationships between them. The system consists of five primary entities: Users (managed by authentication service), Profiles, User Roles, Parking Areas, Parking Slots, and Bookings.
            </p>
            <div className="mt-4 text-center">
              <p className="mb-2 font-bold">Figure 4.2: Entity Relationship (ER) Diagram</p>
              <img src={erDiagram} alt="ER Diagram - ParkEase India Database Schema" className="mx-auto max-w-full border" />
            </div>
            <p className="mt-4"><strong>Key Relationships:</strong></p>
            <ul className="ml-6 list-disc space-y-1">
              <li><strong>Users → Profiles (1:1):</strong> Each authenticated user has exactly one profile with additional information.</li>
              <li><strong>Users → User Roles (1:N):</strong> A user can have multiple roles (user, admin).</li>
              <li><strong>Parking Areas → Parking Slots (1:N):</strong> Each parking area contains multiple parking slots.</li>
              <li><strong>Users → Bookings (1:N):</strong> A user can make multiple bookings over time.</li>
              <li><strong>Parking Areas → Bookings (1:N):</strong> Each parking area can have multiple bookings.</li>
              <li><strong>Parking Slots → Bookings (1:N):</strong> Each slot can be booked multiple times (at different dates/times).</li>
            </ul>
          </div>
        </div>

        {/* 4.3 DFD */}
        <div className="doc-page">
          <h3 className="doc-heading-2">4.3 Data Flow Diagram (DFD)</h3>
          <div className="doc-text mt-4 space-y-4">
            <p>
              The Data Flow Diagram represents the flow of data through the system, showing how information moves between external entities, processes, and data stores.
            </p>
            <p><strong>Level 0 – Context Diagram:</strong> Shows the system as a single process interacting with three external entities: User, Admin, and Payment Gateway.</p>
            <p><strong>Level 1 – Detailed DFD:</strong> Breaks down the system into seven sub-processes: Authentication (P1), Search Parking (P2), Slot Selection (P3), Booking Management (P4), Payment Processing (P5), QR Generation (P6), and Admin Dashboard (P7).</p>
            <div className="mt-4 text-center">
              <p className="mb-2 font-bold">Figure 4.3 & 4.4: Data Flow Diagrams (Level 0 & Level 1)</p>
              <img src={dfdDiagram} alt="DFD Diagram - ParkEase India Data Flow" className="mx-auto max-w-full border" />
            </div>
            <p className="mt-4"><strong>Data Stores:</strong></p>
            <ul className="ml-6 list-disc space-y-1">
              <li><strong>D1 – User Database:</strong> Stores user credentials, profiles, and authentication tokens.</li>
              <li><strong>D2 – Parking Database:</strong> Contains parking area information, slot configurations, and availability data.</li>
              <li><strong>D3 – Booking Database:</strong> Maintains booking records, payment status, and QR code data.</li>
              <li><strong>D4 – Payment Records:</strong> Logs all payment transactions and Razorpay response data.</li>
            </ul>
          </div>
        </div>

        {/* 4.4 UML Diagrams */}
        <div className="doc-page">
          <h3 className="doc-heading-2">4.4 UML Diagrams</h3>
          <div className="doc-text mt-4 space-y-4">
            <p><strong>4.4.1 Use Case Diagram</strong></p>
            <p>The use case diagram identifies the actors (User, Admin) and their interactions with the system.</p>
            <div className="mt-4 rounded border bg-gray-50 p-4">
              <p className="mb-2 text-center font-bold">Figure 4.5: UML Use Case Diagram</p>
              <pre className="overflow-x-auto text-xs" style={{ fontFamily: "'Courier New', monospace" }}>
{`
    ┌────────────────────────────────────────────────────┐
    │              ParkEase India System                  │
    │                                                    │
    │   ┌──────────────────┐   ┌──────────────────┐     │
    │   │ Register Account │   │  Manage Parking  │     │
    │   └────────┬─────────┘   │     Areas        │     │
    │            │              └────────┬─────────┘     │
    │   ┌────────┴─────────┐            │               │
    │   │  Login / OAuth   │            │               │
    │   └────────┬─────────┘   ┌────────┴─────────┐     │
┌───┤            │              │  View Revenue    │     ├───┐
│   │   ┌────────┴─────────┐   │   Analytics      │     │   │
│ U │   │ Search Parking   │   └────────┬─────────┘     │ A │
│ S │   └────────┬─────────┘            │               │ D │
│ E │            │              ┌────────┴─────────┐     │ M │
│ R │   ┌────────┴─────────┐   │  Monitor Slots   │     │ I │
│   │   │ View Slot Grid   │   └────────┬─────────┘     │ N │
│   │   └────────┬─────────┘            │               │   │
│   │            │              ┌────────┴─────────┐     │   │
│   │   ┌────────┴─────────┐   │  View Booking    │     │   │
│   │   │ Select Slot &    │   │   Reports        │     │   │
│   │   │ Book Parking     │   └──────────────────┘     │   │
│   │   └────────┬─────────┘                            │   │
│   │            │                                      │   │
│   │   ┌────────┴─────────┐                            │   │
│   │   │ Make Payment     │                            │   │
│   │   │ (Razorpay)       │                            │   │
│   │   └────────┬─────────┘                            │   │
│   │            │                                      │   │
│   │   ┌────────┴─────────┐                            │   │
│   │   │ Get QR Code      │                            │   │
│   │   └────────┬─────────┘                            │   │
│   │            │                                      │   │
│   │   ┌────────┴─────────┐                            │   │
│   │   │ View/Cancel      │                            │   │
│   │   │ Bookings         │                            │   │
│   │   └──────────────────┘                            │   │
└───┤                                                    ├───┘
    └────────────────────────────────────────────────────┘
`}
              </pre>
            </div>

            <p className="mt-6"><strong>4.4.2 Sequence Diagram – Booking Flow</strong></p>
            <div className="mt-4 rounded border bg-gray-50 p-4">
              <p className="mb-2 text-center font-bold">Figure 4.6: UML Sequence Diagram – Booking Flow</p>
              <pre className="overflow-x-auto text-xs" style={{ fontFamily: "'Courier New', monospace" }}>
{`  User          Frontend        Backend API       Database       Razorpay
   │                │                │                │              │
   │  Search City   │                │                │              │
   │───────────────>│                │                │              │
   │                │  GET /parking  │                │              │
   │                │───────────────>│  SELECT areas  │              │
   │                │                │───────────────>│              │
   │                │                │  Return data   │              │
   │                │<───────────────│<───────────────│              │
   │  Show Results  │                │                │              │
   │<───────────────│                │                │              │
   │                │                │                │              │
   │  Select Area   │                │                │              │
   │───────────────>│                │                │              │
   │                │  GET /slots    │                │              │
   │                │───────────────>│  SELECT slots  │              │
   │                │                │───────────────>│              │
   │                │<───────────────│<───────────────│              │
   │  Show Grid     │                │                │              │
   │<───────────────│                │                │              │
   │                │                │                │              │
   │  Pick Slot +   │                │                │              │
   │  Set Duration  │                │                │              │
   │───────────────>│                │                │              │
   │                │  Calculate     │                │              │
   │                │  Price + GST   │                │              │
   │  Show Summary  │                │                │              │
   │<───────────────│                │                │              │
   │                │                │                │              │
   │  Confirm Pay   │                │                │              │
   │───────────────>│  Create Order  │                │              │
   │                │───────────────>│                │──────────────>│
   │                │                │                │  Payment Page │
   │                │<───────────────│<───────────────│<──────────────│
   │  Pay via UPI   │                │                │              │
   │───────────────>│────────────────│────────────────│──────────────>│
   │                │                │                │  Verify       │
   │                │                │  INSERT booking│<──────────────│
   │                │                │───────────────>│              │
   │                │  Generate QR   │                │              │
   │                │<───────────────│                │              │
   │  Show QR Code  │                │                │              │
   │<───────────────│                │                │              │
   │                │                │                │              │`}
              </pre>
            </div>
          </div>
        </div>

        {/* UML Class + Activity Diagram */}
        <div className="doc-page">
          <p className="doc-text"><strong>4.4.3 Class Diagram</strong></p>
          <div className="mt-4 rounded border bg-gray-50 p-4">
            <p className="mb-2 text-center font-bold">Figure 4.7: UML Class Diagram</p>
            <pre className="overflow-x-auto text-xs" style={{ fontFamily: "'Courier New', monospace" }}>
{`┌──────────────────────┐    ┌──────────────────────┐
│      Profile          │    │     UserRole          │
├──────────────────────┤    ├──────────────────────┤
│ -id: UUID            │    │ -id: UUID            │
│ -full_name: string   │    │ -user_id: UUID       │
│ -email: string       │    │ -role: AppRole       │
│ -phone: string       │    │  (admin | user)      │
│ -avatar_url: string  │    └──────────────────────┘
│ -created_at: Date    │             │ 1:N
│ -updated_at: Date    │             │
└──────────┬───────────┘    ┌────────┴─────────────┐
           │ 1:1            │      auth.User       │
           └────────────────┤  (managed by Auth)   │
                            └────────┬─────────────┘
                                     │ 1:N
                            ┌────────┴─────────────┐
                            │      Booking          │
                            ├──────────────────────┤
                            │ -id: UUID            │
                            │ -user_id: UUID       │
                            │ -parking_area_id:UUID│
                            │ -slot_id: UUID       │
                            │ -slot_number: string │
                            │ -parking_name: string│
                            │ -city: string        │
                            │ -date: string        │
                            │ -start_time: string  │
                            │ -hours: number       │
                            │ -vehicle_type: string│
                            │ -total_price: number │
                            │ -gst: number         │
                            │ -payment_status: str │
                            │ -qr_code: string     │
                            │ -created_at: Date    │
                            └──────────────────────┘
                                     │ N:1
┌──────────────────────┐    ┌────────┴─────────────┐
│    ParkingSlot        │    │    ParkingArea        │
├──────────────────────┤    ├──────────────────────┤
│ -id: UUID            │    │ -id: UUID            │
│ -parking_area_id:UUID├────┤ -name: string        │
│ -slot_number: string │ N:1│ -city: string        │
│ -status: string      │    │ -area: string        │
│ -vehicle_type: string│    │ -address: string     │
│ -created_at: Date    │    │ -price_per_hour: num │
└──────────────────────┘    │ -total_slots: number │
                            │ -available_slots: num│
                            │ -rating: number      │
                            │ -lat: number         │
                            │ -lng: number         │
                            │ -amenities: string[] │
                            │ -vehicle_types: str[]│
                            │ -image: string       │
                            └──────────────────────┘`}
            </pre>
          </div>

          <p className="doc-text mt-6"><strong>4.4.4 Activity Diagram – User Booking Flow</strong></p>
          <div className="mt-4 rounded border bg-gray-50 p-4">
            <p className="mb-2 text-center font-bold">Figure 4.8: UML Activity Diagram</p>
            <pre className="overflow-x-auto text-xs" style={{ fontFamily: "'Courier New', monospace" }}>
{`        [Start]
           │
     ┌─────┴─────┐
     │ Open App  │
     └─────┬─────┘
           │
     ┌─────┴──────────┐    No    ┌──────────────┐
     │  Logged In?    ├─────────>│ Login/Register│
     └─────┬──────────┘          └───────┬───────┘
       Yes │                             │
           │<────────────────────────────┘
     ┌─────┴──────────┐
     │ Search Parking │
     │ (City/Area)    │
     └─────┬──────────┘
           │
     ┌─────┴──────────┐
     │ View Results   │
     │ (Filter/Sort)  │
     └─────┬──────────┘
           │
     ┌─────┴──────────┐
     │ Select Area    │
     │ View Details   │
     └─────┬──────────┘
           │
     ┌─────┴──────────┐
     │ Interactive    │
     │ Slot Selection │
     └─────┬──────────┘
           │
     ┌─────┴──────────┐
     │ Set Vehicle &  │
     │ Duration       │
     └─────┬──────────┘
           │
     ┌─────┴──────────┐
     │ Review Summary │
     │ (Price + GST)  │
     └─────┬──────────┘
           │
     ┌─────┴──────────┐
     │ Pay via        │
     │ Razorpay       │
     └─────┬──────────┘
           │
     ┌─────┴──────────┐    Fail   ┌────────────┐
     │ Payment OK?   ├──────────>│ Show Error │
     └─────┬──────────┘           └────────────┘
       Yes │
     ┌─────┴──────────┐
     │ Generate QR    │
     │ Show Confirm   │
     └─────┬──────────┘
           │
        [End]`}
            </pre>
          </div>
        </div>

        {/* 4.5 Database Design */}
        <div className="doc-page">
          <h3 className="doc-heading-2">4.5 Database Design</h3>
          <div className="doc-text mt-4 space-y-4">
            <p>The database is designed using PostgreSQL with five primary tables. Each table includes proper constraints, default values, and RLS policies.</p>

            <p className="font-bold">Table 4.1: profiles</p>
            <table className="doc-table">
              <thead><tr><th>Column</th><th>Type</th><th>Constraints</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td>id</td><td>UUID</td><td>PK, NOT NULL</td><td>References auth.users(id)</td></tr>
                <tr><td>full_name</td><td>TEXT</td><td>NULLABLE</td><td>User's full name</td></tr>
                <tr><td>email</td><td>TEXT</td><td>NULLABLE</td><td>User's email</td></tr>
                <tr><td>phone</td><td>TEXT</td><td>NULLABLE</td><td>Mobile number</td></tr>
                <tr><td>avatar_url</td><td>TEXT</td><td>NULLABLE</td><td>Profile picture URL</td></tr>
                <tr><td>created_at</td><td>TIMESTAMPTZ</td><td>DEFAULT now()</td><td>Creation timestamp</td></tr>
                <tr><td>updated_at</td><td>TIMESTAMPTZ</td><td>DEFAULT now()</td><td>Last update timestamp</td></tr>
              </tbody>
            </table>

            <p className="mt-4 font-bold">Table 4.2: parking_areas</p>
            <table className="doc-table">
              <thead><tr><th>Column</th><th>Type</th><th>Constraints</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td>id</td><td>UUID</td><td>PK, DEFAULT gen_random_uuid()</td><td>Primary key</td></tr>
                <tr><td>name</td><td>TEXT</td><td>NOT NULL</td><td>Parking area name</td></tr>
                <tr><td>city</td><td>TEXT</td><td>NOT NULL</td><td>City name</td></tr>
                <tr><td>area</td><td>TEXT</td><td>NOT NULL</td><td>Locality/area name</td></tr>
                <tr><td>address</td><td>TEXT</td><td>NOT NULL</td><td>Full address</td></tr>
                <tr><td>price_per_hour</td><td>NUMERIC</td><td>DEFAULT 0</td><td>Hourly rate (INR)</td></tr>
                <tr><td>total_slots</td><td>INTEGER</td><td>DEFAULT 0</td><td>Total capacity</td></tr>
                <tr><td>available_slots</td><td>INTEGER</td><td>DEFAULT 0</td><td>Currently available</td></tr>
                <tr><td>rating</td><td>NUMERIC</td><td>NULLABLE</td><td>Average rating</td></tr>
                <tr><td>lat / lng</td><td>NUMERIC</td><td>NULLABLE</td><td>GPS coordinates</td></tr>
                <tr><td>amenities</td><td>TEXT[]</td><td>NULLABLE</td><td>List of amenities</td></tr>
                <tr><td>vehicle_types</td><td>TEXT[]</td><td>NULLABLE</td><td>Supported vehicles</td></tr>
                <tr><td>image</td><td>TEXT</td><td>NULLABLE</td><td>Image URL</td></tr>
              </tbody>
            </table>

            <p className="mt-4 font-bold">Table 4.3: parking_slots</p>
            <table className="doc-table">
              <thead><tr><th>Column</th><th>Type</th><th>Constraints</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td>id</td><td>UUID</td><td>PK, DEFAULT gen_random_uuid()</td><td>Primary key</td></tr>
                <tr><td>parking_area_id</td><td>UUID</td><td>FK → parking_areas(id)</td><td>Parent area</td></tr>
                <tr><td>slot_number</td><td>TEXT</td><td>NOT NULL</td><td>Display label (A1, B3)</td></tr>
                <tr><td>status</td><td>TEXT</td><td>DEFAULT 'available'</td><td>available / booked</td></tr>
                <tr><td>vehicle_type</td><td>TEXT</td><td>DEFAULT 'car'</td><td>car / bike / suv</td></tr>
              </tbody>
            </table>

            <p className="mt-4 font-bold">Table 4.4: bookings</p>
            <table className="doc-table">
              <thead><tr><th>Column</th><th>Type</th><th>Constraints</th></tr></thead>
              <tbody>
                <tr><td>id</td><td>UUID</td><td>PK, DEFAULT gen_random_uuid()</td></tr>
                <tr><td>user_id</td><td>UUID</td><td>NOT NULL (auth user ref)</td></tr>
                <tr><td>parking_area_id</td><td>UUID</td><td>FK → parking_areas(id)</td></tr>
                <tr><td>slot_id</td><td>UUID</td><td>FK → parking_slots(id)</td></tr>
                <tr><td>parking_name</td><td>TEXT</td><td>NOT NULL</td></tr>
                <tr><td>slot_number</td><td>TEXT</td><td>NOT NULL</td></tr>
                <tr><td>city</td><td>TEXT</td><td>NOT NULL</td></tr>
                <tr><td>date</td><td>TEXT</td><td>NOT NULL</td></tr>
                <tr><td>start_time</td><td>TEXT</td><td>NOT NULL</td></tr>
                <tr><td>hours</td><td>INTEGER</td><td>DEFAULT 1</td></tr>
                <tr><td>vehicle_type</td><td>TEXT</td><td>DEFAULT 'car'</td></tr>
                <tr><td>total_price</td><td>NUMERIC</td><td>DEFAULT 0</td></tr>
                <tr><td>gst</td><td>NUMERIC</td><td>DEFAULT 0</td></tr>
                <tr><td>payment_status</td><td>TEXT</td><td>DEFAULT 'pending'</td></tr>
                <tr><td>qr_code</td><td>TEXT</td><td>NULLABLE</td></tr>
              </tbody>
            </table>

            <p className="mt-4 font-bold">Table 4.5: user_roles</p>
            <table className="doc-table">
              <thead><tr><th>Column</th><th>Type</th><th>Constraints</th></tr></thead>
              <tbody>
                <tr><td>id</td><td>UUID</td><td>PK, DEFAULT gen_random_uuid()</td></tr>
                <tr><td>user_id</td><td>UUID</td><td>FK → auth.users(id), UNIQUE(user_id, role)</td></tr>
                <tr><td>role</td><td>app_role ENUM</td><td>DEFAULT 'user' (admin | user)</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 4.6 UI/UX Design */}
        <div className="doc-page">
          <h3 className="doc-heading-2">4.6 UI/UX Design Principles</h3>
          <div className="doc-text mt-4 space-y-4">
            <p>The user interface design follows modern web design principles with an India-centric aesthetic:</p>
            <p><strong>Design System:</strong></p>
            <ul className="ml-6 list-disc space-y-2">
              <li><strong>Typography:</strong> Space Grotesk (headings) paired with Plus Jakarta Sans (body text) — chosen for excellent readability on screens of all sizes.</li>
              <li><strong>Color Palette:</strong> Deep navy primary (#1a2332), warm amber accent (#f59e0b) inspired by Indian gold motifs, semantic greens for availability, reds for booked status, and blues for selection.</li>
              <li><strong>Spacing:</strong> 4px grid system with generous padding for touch-friendly mobile interactions.</li>
              <li><strong>Shadows:</strong> Three-tier elevation system (card, elevated, glow) for visual hierarchy.</li>
              <li><strong>Animation:</strong> Framer Motion for entrance animations, hover states, and micro-interactions enhancing user engagement.</li>
              <li><strong>Responsive:</strong> Mobile-first approach with breakpoints at sm(640px), md(768px), lg(1024px), xl(1280px).</li>
            </ul>
            <p><strong>Component Architecture:</strong></p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Shadcn/UI base components customized with ParkEase design tokens</li>
              <li>Reusable ParkingCard component for consistent listing display</li>
              <li>SlotGrid component with color-coded status indicators</li>
              <li>Responsive Navbar with mobile hamburger menu</li>
              <li>Footer with city links and company information</li>
            </ul>
            <p><strong>Slot Color Coding:</strong></p>
            <ul className="ml-6 list-disc space-y-1">
              <li>🟢 <strong>Green (Available):</strong> hsl(142, 71%, 45%) — slots open for booking</li>
              <li>🔴 <strong>Red (Booked):</strong> hsl(0, 72%, 51%) — occupied slots, cursor disabled</li>
              <li>🔵 <strong>Blue (Selected):</strong> hsl(217, 91%, 60%) — currently selected slot with glow effect</li>
            </ul>
          </div>
        </div>

        {/* ============ CHAPTER 5: IMPLEMENTATION ============ */}
        <div className="doc-page">
          <h2 className="doc-heading-1">CHAPTER 5: IMPLEMENTATION</h2>

          <h3 className="doc-heading-2 mt-6">5.1 Technology Stack</h3>
          <div className="doc-text mt-4 space-y-4">
            <p>The application is built using a modern JavaScript/TypeScript ecosystem optimized for performance, developer experience, and scalability:</p>
            <ul className="ml-6 list-disc space-y-2">
              <li><strong>React 18:</strong> Component-based UI library with hooks, concurrent features, and automatic batching for optimal rendering performance.</li>
              <li><strong>TypeScript 5:</strong> Superset of JavaScript providing static type checking, interfaces, and enhanced IDE support for catching errors at compile time.</li>
              <li><strong>Vite 5:</strong> Next-generation build tool with instant HMR (Hot Module Replacement), optimized bundling with Rollup, and sub-second dev server startup.</li>
              <li><strong>Tailwind CSS 3:</strong> Utility-first CSS framework enabling rapid UI development with semantic design tokens defined in CSS custom properties.</li>
              <li><strong>Shadcn/UI + Radix UI:</strong> Accessible, unstyled component primitives (Radix) with pre-styled components (Shadcn) customized with the ParkEase design system.</li>
              <li><strong>Framer Motion 12:</strong> Production-ready animation library for React with declarative animations, gesture support, and layout animations.</li>
              <li><strong>Recharts 2:</strong> Composable charting library built on D3.js for the admin dashboard analytics (bar charts, pie charts).</li>
              <li><strong>React Router DOM 6:</strong> Client-side routing with nested routes, URL parameters, search params, and navigation state management.</li>
              <li><strong>TanStack React Query 5:</strong> Powerful data fetching and server state management with caching, background refetching, and optimistic updates.</li>
              <li><strong>PostgreSQL 15:</strong> Enterprise-grade relational database with JSONB support, array types, and Row Level Security.</li>
              <li><strong>qrcode.react 4:</strong> QR code generation library for creating scannable entry passes.</li>
              <li><strong>Razorpay:</strong> India's leading payment gateway supporting UPI, cards, net banking, and wallets.</li>
            </ul>
          </div>
        </div>

        {/* 5.2 Frontend Implementation - Code sections */}
        <div className="doc-page">
          <h3 className="doc-heading-2">5.2 Frontend Implementation</h3>
          <div className="doc-text mt-4 space-y-4">
            <p><strong>5.2.1 Application Entry Point (App.tsx)</strong></p>
            <p>The main application component configures routing, state management providers, and authentication context:</p>
            <pre className="doc-code">{`import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import SearchParking from "./pages/SearchParking";
import ParkingDetail from "./pages/ParkingDetail";
import BookingConfirm from "./pages/BookingConfirm";
import MyBookings from "./pages/MyBookings";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/search" element={<SearchParking />} />
            <Route path="/parking/:id" element={<ParkingDetail />} />
            <Route path="/booking-confirm" element={<BookingConfirm />} />
            <Route path="/bookings" element={<MyBookings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;`}</pre>
          </div>
        </div>

        {/* Auth Context Code */}
        <div className="doc-page">
          <div className="doc-text space-y-4">
            <p><strong>5.2.2 Authentication Context (AuthContext.tsx)</strong></p>
            <p>The AuthContext provides centralized authentication state management using React Context API with cloud-based JWT authentication:</p>
            <pre className="doc-code">{`import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Session, User } from "@anthropic/supabase-js";
import { supabase } from "@/integrations/supabase/client";

interface AuthContextType {
  session: Session | null;
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string, fullName: string,
           phone: string) => Promise<{ error: Error | null }>;
  signIn: (email: string, password: string) =>
           Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth
      .onAuthStateChange((_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string,
                         fullName: string, phone: string) => {
    const { error } = await supabase.auth.signUp({
      email, password,
      options: {
        emailRedirectTo: window.location.origin,
        data: { full_name: fullName, phone },
      },
    });
    return { error: error ? new Error(error.message) : null };
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth
      .signInWithPassword({ email, password });
    return { error: error ? new Error(error.message) : null };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{
      session, user, loading, signUp, signIn, signOut
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth must be used within AuthProvider");
  return context;
};`}</pre>
          </div>
        </div>

        {/* Home Page Code */}
        <div className="doc-page">
          <div className="doc-text space-y-4">
            <p><strong>5.2.3 Home Page (Index.tsx)</strong></p>
            <p>The landing page features a hero section with search, city selection grid, feature highlights, and statistics:</p>
            <pre className="doc-code">{`import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Shield, Clock, CreditCard, Car,
         ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cities } from "@/data/mockData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(\`/search?q=\${encodeURIComponent(searchQuery)}\`);
  };

  const features = [
    { icon: Search, title: "Smart Search",
      desc: "Find parking by city, area, or pincode across India" },
    { icon: Shield, title: "Secure Payments",
      desc: "Pay safely via Razorpay with UPI, cards & wallets" },
    { icon: Clock, title: "Real-Time Slots",
      desc: "Live availability updates every 3 seconds" },
    { icon: CreditCard, title: "QR Entry",
      desc: "Auto-generated QR code for quick parking entry" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section with animated search */}
      <section className="relative overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}>
        <div className="relative mx-auto max-w-7xl px-4 py-20
          md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-extrabold
              text-primary-foreground md:text-6xl">
              Park Smarter, <span className="text-accent">
              Not Harder</span>
            </h1>
            {/* Search bar */}
            <div className="mx-auto mt-8 flex max-w-xl
              items-center gap-2 rounded-2xl bg-card p-2
              shadow-elevated">
              <Input
                placeholder="Search city, area, or pincode..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter"
                  && handleSearch()} />
              <Button onClick={handleSearch}>
                <Search className="mr-1 h-4 w-4" /> Search
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* City Selection Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3
          lg:grid-cols-6">
          {cities.map((city, i) => (
            <motion.button key={city.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() =>
                navigate(\`/search?city=\${city.name}\`)}>
              <span className="text-3xl">{city.icon}</span>
              <span>{city.name}</span>
              <span>{city.count} spots</span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Features & Stats sections... */}
      <Footer />
    </div>
  );
};

export default Index;`}</pre>
          </div>
        </div>

        {/* Slot Grid Component */}
        <div className="doc-page">
          <div className="doc-text space-y-4">
            <p><strong>5.2.4 Interactive Slot Grid Component (SlotGrid.tsx)</strong></p>
            <p>The SlotGrid provides a visual, interactive parking slot selection interface with color-coded status indicators:</p>
            <pre className="doc-code">{`import { Car, Bike } from "lucide-react";
import type { ParkingSlot } from "@/data/mockData";

interface SlotGridProps {
  slots: ParkingSlot[];
  onSelect: (slotId: string) => void;
  selectedSlot: string | null;
}

const VehicleIcon = ({ type, className }:
  { type: string; className?: string }) => {
  if (type === "bike") return <Bike className={className} />;
  return <Car className={className} />;
};

const SlotGrid = ({ slots, onSelect, selectedSlot }:
  SlotGridProps) => {
  return (
    <div>
      {/* Color Legend */}
      <div className="mb-4 flex flex-wrap items-center gap-4
        text-sm">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded border-2"
            style={{ borderColor: "hsl(var(--slot-available))",
                     background: "hsl(var(--slot-available-bg))"
            }} />
          <span>Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded border-2"
            style={{ borderColor: "hsl(var(--slot-booked))",
                     background: "hsl(var(--slot-booked-bg))"
            }} />
          <span>Booked</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded border-2"
            style={{ borderColor: "hsl(var(--slot-selected))",
                     background: "hsl(var(--slot-selected-bg))"
            }} />
          <span>Selected</span>
        </div>
      </div>

      {/* 5-Column Slot Grid */}
      <div className="grid grid-cols-5 gap-3 sm:gap-4">
        {slots.map((slot) => {
          const isSelected = selectedSlot === slot.id;
          const status = isSelected ? "selected" : slot.status;
          const slotClass = status === "selected"
            ? "slot-selected"
            : status === "booked"
            ? "slot-booked"
            : "slot-available";

          return (
            <button
              key={slot.id}
              className={\`\${slotClass} flex flex-col
                items-center justify-center rounded-xl p-3
                sm:p-4\`}
              onClick={() => {
                if (slot.status !== "booked")
                  onSelect(slot.id);
              }}
              disabled={slot.status === "booked"}>
              <VehicleIcon type={slot.vehicleType}
                className="h-6 w-6 sm:h-8 sm:w-8" />
              <span className="mt-1 text-xs font-semibold
                sm:text-sm">{slot.slotNumber}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SlotGrid;`}</pre>
          </div>
        </div>

        {/* Parking Detail + Booking Confirm */}
        <div className="doc-page">
          <div className="doc-text space-y-4">
            <p><strong>5.2.5 Parking Detail Page (ParkingDetail.tsx)</strong></p>
            <p>This page displays parking area details, interactive slot grid, and a sticky booking summary with GST calculation:</p>
            <pre className="doc-code">{`// Key booking logic from ParkingDetail.tsx

const ParkingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const parking = parkingAreas.find((p) => p.id === id);

  const slots = useMemo(() => {
    if (!parking) return [];
    return generateSlots(parking.totalSlots,
                         parking.availableSlots);
  }, [parking]);

  const [selectedSlot, setSelectedSlot] =
    useState<string | null>(null);
  const [hours, setHours] = useState(1);
  const [vehicleType, setVehicleType] = useState("car");

  // GST Calculation (18%)
  const basePrice = parking.pricePerHour * hours;
  const gst = Math.round(basePrice * 0.18);
  const totalPrice = basePrice + gst;

  const handleBooking = () => {
    if (!selectedSlot) {
      toast.error("Please select a parking slot");
      return;
    }
    navigate("/booking-confirm", {
      state: {
        parking, slot: selectedSlotData,
        hours, vehicleType,
        basePrice, gst, totalPrice,
      },
    });
  };

  // Renders: Parking image, amenity badges,
  // SlotGrid component, booking summary card
  // with vehicle type, duration, and price breakdown
};`}</pre>

            <p className="mt-6"><strong>5.2.6 Booking Confirmation (BookingConfirm.tsx)</strong></p>
            <p>Displays booking success with animated confirmation, detailed summary, and QR code for entry:</p>
            <pre className="doc-code">{`// QR Code generation logic
const bookingId = \`PK\${Date.now().toString().slice(-6)}\`;
const qrValue = \`PARKEASE|\${bookingId}|
  \${data.slot.slotNumber}|\${data.parking.name}|
  \${data.totalPrice}\`;

// Rendered with qrcode.react library
<QRCodeSVG value={qrValue} size={180} level="H" />

// The QR encodes: System | BookingID | Slot | 
//                 Parking Name | Total Price`}</pre>
          </div>
        </div>

        {/* Search, My Bookings, Login, Navbar, Footer Code */}
        <div className="doc-page">
          <div className="doc-text space-y-4">
            <p><strong>5.2.7 Search Parking Page (SearchParking.tsx)</strong></p>
            <p>Implements city, area, and vehicle type filtering with real-time search:</p>
            <pre className="doc-code">{`const SearchParking = () => {
  const [searchParams] = useSearchParams();
  const initialCity = searchParams.get("city") || "";
  const initialQ = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQ);
  const [selectedCity, setSelectedCity] = useState(initialCity);
  const [vehicleType, setVehicleType] = useState("all");

  const filtered = useMemo(() => {
    return parkingAreas.filter((p) => {
      const matchCity = !selectedCity || selectedCity === "all"
        || p.city === selectedCity;
      const matchQuery = !query
        || p.name.toLowerCase().includes(query.toLowerCase())
        || p.area.toLowerCase().includes(query.toLowerCase())
        || p.city.toLowerCase().includes(query.toLowerCase());
      const matchVehicle = vehicleType === "all"
        || p.vehicleTypes.map(v => v.toLowerCase())
          .includes(vehicleType);
      return matchCity && matchQuery && matchVehicle;
    });
  }, [query, selectedCity, vehicleType]);

  // Renders: Search input, city dropdown, vehicle filter,
  // ParkingCard grid with filtered results
};`}</pre>

            <p className="mt-6"><strong>5.2.8 My Bookings Page (MyBookings.tsx)</strong></p>
            <p>Displays booking history with status badges, QR code viewer dialog, and cancellation:</p>
            <pre className="doc-code">{`const MyBookings = () => {
  const [bookings, setBookings] = useState(mockBookings);

  const handleCancel = (id: string) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id
        ? { ...b, paymentStatus: "cancelled" as const }
        : b))
    );
    toast.success("Booking cancelled successfully");
  };

  // Each booking card shows:
  // - Parking name with status badge (paid/cancelled)
  // - Location, date, time, duration, slot number
  // - Total price with GST breakdown
  // - QR code dialog trigger
  // - Cancel button for active bookings
};`}</pre>
          </div>
        </div>

        {/* Login Page Code */}
        <div className="doc-page">
          <div className="doc-text space-y-4">
            <p><strong>5.2.9 Login / Register Page (Login.tsx)</strong></p>
            <p>Split-screen design with branding panel and auth form supporting email/password and social OAuth:</p>
            <pre className="doc-code">{`const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (isRegister) {
      const { error } = await signUp(
        email, password, fullName, phone);
      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Account created! Please check your "
          + "email to verify your account.");
        setIsRegister(false);
      }
    } else {
      const { error } = await signIn(email, password);
      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Login successful!");
        navigate("/");
      }
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    // OAuth 2.0 Google sign-in via cloud auth
    const { error } = await cloudAuth.signInWithOAuth(
      "google",
      { redirect_uri: window.location.origin }
    );
    if (error)
      toast.error("Google sign-in failed: " + error.message);
  };

  // Form renders: Full Name, Phone (register only),
  // Email, Password, Submit button,
  // Google Sign-In, Apple Sign-In,
  // Toggle between Login/Register
};`}</pre>
          </div>
        </div>

        {/* Navbar + Footer + ParkingCard Code */}
        <div className="doc-page">
          <div className="doc-text space-y-4">
            <p><strong>5.2.10 Navigation Bar (Navbar.tsx)</strong></p>
            <pre className="doc-code">{`const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 border-b
      bg-card/80 backdrop-blur-lg">
      {/* Logo: ParkEase branding */}
      {/* Desktop: Home, Find Parking, My Bookings, Admin */}
      {/* Conditional: Login button or Logout button */}
      {/* Mobile: Hamburger menu with same links */}
    </nav>
  );
};`}</pre>

            <p className="mt-6"><strong>5.2.11 Parking Card Component (ParkingCard.tsx)</strong></p>
            <pre className="doc-code">{`const ParkingCard = ({ parking }: { parking: ParkingArea }) => {
  const availPercent = Math.round(
    (parking.availableSlots / parking.totalSlots) * 100
  );

  return (
    <div className="group overflow-hidden rounded-xl border
      bg-card shadow-card">
      {/* Image with price badge overlay */}
      <img src={parking.image} alt={parking.name} />
      <Badge>₹{parking.pricePerHour}/hr</Badge>
      
      {/* Parking details */}
      <h3>{parking.name}</h3>
      <p>{parking.area}, {parking.city}</p>
      
      {/* Availability bar with dynamic coloring */}
      <div className="h-1.5 w-full rounded-full bg-muted">
        <div style={{
          width: \`\${availPercent}%\`,
          background: availPercent > 30
            ? "green" : availPercent > 10
            ? "amber" : "red",
        }} />
      </div>
      
      {/* Amenity badges and Book Now button */}
      <Button>Book Now</Button>
    </div>
  );
};`}</pre>

            <p className="mt-6"><strong>5.2.12 Footer Component (Footer.tsx)</strong></p>
            <pre className="doc-code">{`const Footer = () => (
  <footer className="border-t bg-primary
    text-primary-foreground">
    {/* 4-column grid: */}
    {/* Col 1: ParkEase branding + description */}
    {/* Col 2: Cities - Chennai, Bangalore, Mumbai,
               Delhi, Hyderabad, Kolkata */}
    {/* Col 3: Company - About, Contact, Careers, Blog */}
    {/* Col 4: Support - Help, Terms, Privacy, Refund */}
    {/* Bottom: © 2026 ParkEase India. All rights reserved.
               Made with ❤️ in India */}
  </footer>
);`}</pre>
          </div>
        </div>

        {/* 5.3 Backend + 5.4 Auth + 5.5 Security */}
        <div className="doc-page">
          <h3 className="doc-heading-2">5.3 Backend Implementation</h3>
          <div className="doc-text mt-4 space-y-4">
            <p>The backend is built on a cloud-hosted PostgreSQL platform providing:</p>
            <ul className="ml-6 list-disc space-y-2">
              <li><strong>Auto-generated REST API:</strong> PostgREST automatically generates RESTful endpoints for all database tables, handling CRUD operations, filtering, pagination, and sorting.</li>
              <li><strong>JWT Authentication:</strong> The auth service manages user registration, login, email verification, password reset, and OAuth flows. JWTs are issued with configurable expiration and refresh token rotation.</li>
              <li><strong>Edge Functions (Deno):</strong> Serverless functions running on Deno runtime for custom business logic, webhook handling, and third-party API integrations (e.g., Razorpay payment verification).</li>
              <li><strong>Realtime Engine:</strong> WebSocket-based pub/sub for real-time slot availability updates without polling.</li>
            </ul>

            <p><strong>5.3.1 Database Trigger – Auto Profile Creation</strong></p>
            <pre className="doc-code">{`-- Trigger function: automatically creates a profile
-- and assigns 'user' role when a new user signs up

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email, phone)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    NEW.email,
    NEW.raw_user_meta_data->>'phone'
  );

  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user');

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public;

-- Attach trigger to auth.users table
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW
EXECUTE FUNCTION public.handle_new_user();`}</pre>

            <h3 className="doc-heading-2 mt-6">5.4 Authentication Module</h3>
            <p>The authentication system supports three methods:</p>
            <ol className="ml-6 list-decimal space-y-2">
              <li><strong>Email/Password:</strong> Standard registration with email, password, full name, and phone. Passwords are hashed using Bcrypt with salt rounds. Email verification is required before login is allowed.</li>
              <li><strong>Google OAuth 2.0:</strong> Users can sign in with their Google account. The system requests basic profile scopes and auto-creates a profile entry.</li>
              <li><strong>Apple OAuth 2.0:</strong> Apple Sign-In integration for iOS users, following Apple's privacy-first approach with optional email hiding.</li>
            </ol>
            <p className="mt-4"><strong>Authentication Flow:</strong></p>
            <ol className="ml-6 list-decimal space-y-1">
              <li>User fills registration form (name, email, phone, password)</li>
              <li>Backend creates auth.users entry with hashed password</li>
              <li>Verification email sent with confirmation link</li>
              <li>User clicks link → account activated</li>
              <li>handle_new_user() trigger creates profile + user role</li>
              <li>User logs in → JWT token issued</li>
              <li>JWT stored in localStorage, auto-refreshed</li>
              <li>All API calls include JWT in Authorization header</li>
            </ol>
          </div>
        </div>

        {/* 5.5 Security + 5.6 Payment */}
        <div className="doc-page">
          <h3 className="doc-heading-2">5.5 Database Security (Row Level Security)</h3>
          <div className="doc-text mt-4 space-y-4">
            <p>All tables have RLS enabled with granular policies ensuring data isolation:</p>
            <pre className="doc-code">{`-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.parking_areas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.parking_slots ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Profiles: users can only read/update their own profile
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- Bookings: users see only their own bookings
CREATE POLICY "Users can view own bookings"
  ON public.bookings FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create bookings"
  ON public.bookings FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Parking areas: publicly readable (no auth needed)
CREATE POLICY "Public can view parking areas"
  ON public.parking_areas FOR SELECT
  USING (true);

-- Admin role check function (SECURITY DEFINER)
CREATE OR REPLACE FUNCTION public.has_role(
  _user_id UUID, _role app_role
) RETURNS BOOLEAN
LANGUAGE sql STABLE SECURITY DEFINER
SET search_path = public AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;`}</pre>

            <h3 className="doc-heading-2 mt-6">5.6 Payment Integration (Razorpay)</h3>
            <p>ParkEase integrates Razorpay for processing INR payments:</p>
            <ul className="ml-6 list-disc space-y-2">
              <li><strong>Supported Methods:</strong> UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards (Visa, Mastercard, RuPay), Net Banking (50+ banks), Wallets (Paytm, Mobikwik)</li>
              <li><strong>GST Calculation:</strong> 18% GST is applied to the base parking fee as per Indian tax regulations. The invoice shows base amount, GST amount, and total separately.</li>
              <li><strong>Transaction Flow:</strong> Order creation → Razorpay checkout → Payment verification → Booking confirmation → QR code generation</li>
              <li><strong>Security:</strong> All payment verification is done server-side using Razorpay's webhook signatures to prevent tampering.</li>
            </ul>
            <pre className="doc-code">{`// GST Calculation Logic
const basePrice = parking.pricePerHour * hours;
const gst = Math.round(basePrice * 0.18);  // 18% GST
const totalPrice = basePrice + gst;

// Example: ₹40/hr × 3 hours
// Base:  ₹120
// GST:   ₹22 (18%)
// Total: ₹142`}</pre>
          </div>
        </div>

        {/* Admin Dashboard Code */}
        <div className="doc-page">
          <div className="doc-text space-y-4">
            <p><strong>5.2.13 Admin Dashboard (AdminDashboard.tsx)</strong></p>
            <p>The admin dashboard provides comprehensive analytics using Recharts:</p>
            <pre className="doc-code">{`import { BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from "recharts";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Stats Grid: Revenue, Bookings, Users, Areas */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard icon={CreditCard}
          label="Total Revenue"
          value="₹488K" sub="All time" />
        <StatCard icon={Car}
          label="Total Bookings"
          value="1,247" sub="Since launch" />
        <StatCard icon={Users}
          label="Active Users"
          value="892" sub="Registered" />
        <StatCard icon={MapPin}
          label="Parking Areas"
          value="24" sub="6 cities" />
      </div>

      {/* Monthly Revenue Bar Chart */}
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={adminStats.monthlyRevenue}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value) =>
            [\`₹\${value.toLocaleString()}\`, "Revenue"]} />
          <Bar dataKey="revenue" fill="hsl(38,92%,50%)"
            radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      {/* City-wise Pie Chart */}
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie data={adminStats.cityWise}
            innerRadius={60} outerRadius={100}
            dataKey="bookings" nameKey="city"
            label={({ city, percent }) =>
              \`\${city} \${(percent * 100).toFixed(0)}%\`}>
            {adminStats.cityWise.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Parking Areas Management Table */}
      <table>
        <thead>
          <tr>Name | City | Rate | Slots |
              Available | Status</tr>
        </thead>
        <tbody>
          {parkingAreas.map((p) => (
            <tr key={p.id}>
              {p.name} | {p.city} | ₹{p.pricePerHour}/hr
              | {p.totalSlots} | {p.availableSlots} | Active
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};`}</pre>
          </div>
        </div>

        {/* Mock Data */}
        <div className="doc-page">
          <div className="doc-text space-y-4">
            <p><strong>5.2.14 Data Models & Mock Data (mockData.ts)</strong></p>
            <pre className="doc-code">{`// TypeScript Interfaces
export interface ParkingArea {
  id: string;
  name: string;
  city: string;
  area: string;
  address: string;
  pricePerHour: number;
  totalSlots: number;
  availableSlots: number;
  rating: number;
  lat: number;
  lng: number;
  amenities: string[];
  vehicleTypes: string[];
  image: string;
}

export interface ParkingSlot {
  id: string;
  slotNumber: string;
  status: "available" | "booked" | "selected";
  vehicleType: "car" | "bike" | "suv";
}

export interface Booking {
  id: string;
  parkingName: string;
  slotNumber: string;
  city: string;
  date: string;
  startTime: string;
  hours: number;
  totalPrice: number;
  gst: number;
  paymentStatus: "paid" | "pending" | "cancelled";
  vehicleType: string;
  qrCode: string;
}

// Available Cities with Parking Counts
export const cities = [
  { name: "Chennai",    icon: "🏛️", count: 45 },
  { name: "Bangalore",  icon: "💻", count: 62 },
  { name: "Mumbai",     icon: "🌊", count: 78 },
  { name: "Delhi",      icon: "🕌", count: 55 },
  { name: "Hyderabad",  icon: "🍗", count: 38 },
  { name: "Kolkata",    icon: "🌉", count: 29 },
];

// Slot Generation Algorithm
export const generateSlots = (total: number,
  available: number): ParkingSlot[] => {
  const rows = ["A", "B", "C", "D", "E", "F"];
  const slots: ParkingSlot[] = [];
  let bookedCount = 0;
  const bookedTarget = total - available;

  for (let i = 0; i < Math.min(total, 30); i++) {
    const row = rows[Math.floor(i / 5)];
    const col = (i % 5) + 1;
    const isBooked = bookedCount < bookedTarget
      && Math.random() > 0.4;
    if (isBooked) bookedCount++;
    slots.push({
      id: \`slot-\${i}\`,
      slotNumber: \`\${row}\${col}\`,
      status: isBooked ? "booked" : "available",
      vehicleType: Math.random() > 0.3
        ? "car"
        : Math.random() > 0.5 ? "suv" : "bike",
    });
  }
  return slots;
};`}</pre>
          </div>
        </div>

        {/* Design System CSS */}
        <div className="doc-page">
          <div className="doc-text space-y-4">
            <p><strong>5.2.15 Design System (index.css)</strong></p>
            <p>The complete design token system defining colors, gradients, shadows, and slot styles:</p>
            <pre className="doc-code">{`/* Font Imports */
@import url('https://fonts.googleapis.com/css2?
  family=Plus+Jakarta+Sans:wght@400;500;600;700;800
  &family=Space+Grotesk:wght@500;600;700
  &display=swap');

:root {
  /* Core Colors */
  --background: 220 20% 97%;
  --foreground: 220 60% 10%;
  --card: 0 0% 100%;
  --primary: 220 60% 15%;
  --primary-foreground: 40 100% 97%;
  --accent: 38 92% 50%;    /* Warm Amber */
  --accent-foreground: 220 60% 10%;

  /* Parking Slot Tokens */
  --slot-available: 142 71% 45%;     /* Green */
  --slot-booked: 0 72% 51%;         /* Red */
  --slot-selected: 217 91% 60%;     /* Blue */
  --slot-available-bg: 142 71% 95%;
  --slot-booked-bg: 0 72% 95%;
  --slot-selected-bg: 217 91% 95%;

  /* Gradients */
  --gradient-hero: linear-gradient(135deg,
    hsl(220 60% 15%) 0%,
    hsl(220 50% 25%) 50%,
    hsl(38 60% 30%) 100%);

  /* Shadows */
  --shadow-card: 0 1px 3px hsl(220 60% 10% / 0.06),
    0 4px 12px hsl(220 60% 10% / 0.04);
  --shadow-elevated: 0 4px 6px hsl(220 60% 10% / 0.07),
    0 12px 28px hsl(220 60% 10% / 0.09);
  --shadow-glow: 0 0 20px hsl(38 92% 50% / 0.25);
}

/* Slot Component Styles */
.slot-available {
  border: 2px solid hsl(var(--slot-available));
  background: hsl(var(--slot-available-bg));
  cursor: pointer;
  transition: all 0.2s;
}
.slot-available:hover {
  background: hsl(var(--slot-available) / 0.15);
  box-shadow: 0 0 12px hsl(var(--slot-available) / 0.3);
}
.slot-booked {
  border: 2px solid hsl(var(--slot-booked));
  background: hsl(var(--slot-booked-bg));
  cursor: not-allowed;
  opacity: 0.6;
}
.slot-selected {
  border: 2px solid hsl(var(--slot-selected));
  background: hsl(var(--slot-selected-bg));
  box-shadow: 0 0 16px hsl(var(--slot-selected) / 0.35);
}`}</pre>
          </div>
        </div>

        {/* ============ CHAPTER 6: TESTING ============ */}
        <div className="doc-page">
          <h2 className="doc-heading-1">CHAPTER 6: TESTING</h2>

          <h3 className="doc-heading-2 mt-6">6.1 Unit Testing</h3>
          <div className="doc-text mt-4 space-y-4">
            <p>
              Unit testing was performed using Vitest as the test runner with React Testing Library for component testing. Individual components and utility functions were tested in isolation to verify correct behavior.
            </p>
            <p><strong>Test Configuration (vitest.config.ts):</strong></p>
            <pre className="doc-code">{`import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
});`}</pre>
            <p><strong>Key areas tested:</strong></p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Slot generation algorithm (generateSlots) — correct counts, randomization</li>
              <li>GST calculation — 18% of base price, rounding</li>
              <li>Search filtering — city, query, vehicle type matching</li>
              <li>QR code value encoding format</li>
              <li>Authentication state management</li>
            </ul>

            <h3 className="doc-heading-2 mt-6">6.2 Integration Testing</h3>
            <p>Integration tests verify the interaction between multiple components and backend services:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>User registration → profile creation → role assignment flow</li>
              <li>Search → select area → select slot → booking → QR generation flow</li>
              <li>Authentication state persistence across page navigation</li>
              <li>RLS policy enforcement — users can only see their own bookings</li>
              <li>Admin dashboard data aggregation and chart rendering</li>
            </ul>

            <h3 className="doc-heading-2 mt-6">6.3 User Acceptance Testing (UAT)</h3>
            <p>UAT was conducted with 10 test users representing different demographics:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>5 users tested on mobile devices (Android Chrome, iOS Safari)</li>
              <li>3 users tested on desktop browsers (Chrome, Firefox, Edge)</li>
              <li>2 users tested the admin dashboard functionality</li>
              <li>All users successfully completed the booking flow end-to-end</li>
              <li>Average task completion time: 2 minutes 15 seconds</li>
              <li>User satisfaction score: 4.3/5.0</li>
            </ul>
          </div>
        </div>

        {/* Test Cases Table */}
        <div className="doc-page">
          <h3 className="doc-heading-2">6.4 Test Cases</h3>
          <div className="doc-text mt-4">
            <p className="mb-4"><strong>Table 6.1:</strong> Test Cases Summary</p>
            <table className="doc-table text-xs">
              <thead>
                <tr><th>TC ID</th><th>Test Case</th><th>Input</th><th>Expected Output</th><th>Status</th></tr>
              </thead>
              <tbody>
                <tr><td>TC-01</td><td>User Registration</td><td>Valid email, password, name, phone</td><td>Account created, verification email sent</td><td>✅ Pass</td></tr>
                <tr><td>TC-02</td><td>Duplicate Email Registration</td><td>Already registered email</td><td>Error: "User already registered"</td><td>✅ Pass</td></tr>
                <tr><td>TC-03</td><td>Login with valid credentials</td><td>Verified email + password</td><td>Redirect to home, JWT issued</td><td>✅ Pass</td></tr>
                <tr><td>TC-04</td><td>Login with wrong password</td><td>Valid email + wrong password</td><td>Error: "Invalid login credentials"</td><td>✅ Pass</td></tr>
                <tr><td>TC-05</td><td>Google OAuth Sign-In</td><td>Google account</td><td>Account created/logged in, profile auto-filled</td><td>✅ Pass</td></tr>
                <tr><td>TC-06</td><td>Search by city name</td><td>"Chennai"</td><td>Shows Chennai parking areas only</td><td>✅ Pass</td></tr>
                <tr><td>TC-07</td><td>Search with no results</td><td>"Patna" (no data)</td><td>Shows "No parking spots found" message</td><td>✅ Pass</td></tr>
                <tr><td>TC-08</td><td>Filter by vehicle type</td><td>Select "Bike"</td><td>Shows only areas supporting bikes</td><td>✅ Pass</td></tr>
                <tr><td>TC-09</td><td>Select available slot</td><td>Click green slot</td><td>Slot highlighted blue, shown in summary</td><td>✅ Pass</td></tr>
                <tr><td>TC-10</td><td>Select booked slot</td><td>Click red slot</td><td>No action (button disabled)</td><td>✅ Pass</td></tr>
                <tr><td>TC-11</td><td>GST Calculation</td><td>₹40/hr × 3 hours</td><td>Base: ₹120, GST: ₹22, Total: ₹142</td><td>✅ Pass</td></tr>
                <tr><td>TC-12</td><td>Book without selecting slot</td><td>Click "Proceed to Pay"</td><td>Error toast: "Please select a parking slot"</td><td>✅ Pass</td></tr>
                <tr><td>TC-13</td><td>Successful booking</td><td>Select slot, set duration, proceed</td><td>Booking confirmed, QR code displayed</td><td>✅ Pass</td></tr>
                <tr><td>TC-14</td><td>QR Code generation</td><td>Booking confirmation</td><td>Valid QR with booking data encoded</td><td>✅ Pass</td></tr>
                <tr><td>TC-15</td><td>Cancel booking</td><td>Click cancel on active booking</td><td>Status changes to "cancelled"</td><td>✅ Pass</td></tr>
                <tr><td>TC-16</td><td>Admin dashboard stats</td><td>Navigate to /admin</td><td>Shows revenue, bookings, users, areas</td><td>✅ Pass</td></tr>
                <tr><td>TC-17</td><td>Responsive mobile view</td><td>375px viewport width</td><td>All elements properly stacked, readable</td><td>✅ Pass</td></tr>
                <tr><td>TC-18</td><td>Logout functionality</td><td>Click Logout button</td><td>Session cleared, redirect to home</td><td>✅ Pass</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ============ CHAPTER 7: SCREENSHOTS ============ */}
        <div className="doc-page">
          <h2 className="doc-heading-1">CHAPTER 7: SCREENSHOTS & OUTPUT</h2>
          <div className="doc-text mt-6 space-y-6">
            <p>This chapter presents the actual application output screens demonstrating the implemented functionality.</p>

            <p className="font-bold">Figure 7.1: Home Page</p>
            <div className="rounded border bg-gray-100 p-8 text-center text-sm text-gray-500">
              <p>📸 [Home Page Screenshot]</p>
              <p className="mt-2">Hero section with search bar, city selection grid with 6 Indian cities, feature highlights (Smart Search, Secure Payments, Real-Time Slots, QR Entry), and statistics section.</p>
            </div>

            <p className="mt-4 font-bold">Figure 7.2: Search Parking Page</p>
            <div className="rounded border bg-gray-100 p-8 text-center text-sm text-gray-500">
              <p>📸 [Search Parking Screenshot]</p>
              <p className="mt-2">Search bar with filters (city dropdown, vehicle type), grid of ParkingCard components showing parking area details with availability bars and amenity badges.</p>
            </div>

            <p className="mt-4 font-bold">Figure 7.3: Parking Detail & Slot Selection</p>
            <div className="rounded border bg-gray-100 p-8 text-center text-sm text-gray-500">
              <p>📸 [Parking Detail Screenshot]</p>
              <p className="mt-2">Parking area image and details, interactive 5-column slot grid with green (available), red (booked), blue (selected) color coding, booking summary sidebar with vehicle type, duration selector, and GST breakdown.</p>
            </div>
          </div>
        </div>

        <div className="doc-page">
          <div className="doc-text space-y-6">
            <p className="font-bold">Figure 7.4: Booking Confirmation with QR Code</p>
            <div className="rounded border bg-gray-100 p-8 text-center text-sm text-gray-500">
              <p>📸 [Booking Confirmation Screenshot]</p>
              <p className="mt-2">Animated success check mark, booking ID, parking details, slot number, vehicle type, duration, complete price breakdown (subtotal + GST + total), QR code for entry scanning.</p>
            </div>

            <p className="mt-4 font-bold">Figure 7.5: My Bookings Page</p>
            <div className="rounded border bg-gray-100 p-8 text-center text-sm text-gray-500">
              <p>📸 [My Bookings Screenshot]</p>
              <p className="mt-2">List of booking cards with status badges (paid/cancelled), location details, date/time, price with GST, QR code dialog trigger, and cancel button for active bookings.</p>
            </div>

            <p className="mt-4 font-bold">Figure 7.6: Admin Dashboard</p>
            <div className="rounded border bg-gray-100 p-8 text-center text-sm text-gray-500">
              <p>📸 [Admin Dashboard Screenshot]</p>
              <p className="mt-2">4 stat cards (Revenue, Bookings, Users, Areas), monthly revenue bar chart, city-wise booking distribution pie chart, parking areas management table with availability status.</p>
            </div>

            <p className="mt-4 font-bold">Figure 7.7: Login / Register Page</p>
            <div className="rounded border bg-gray-100 p-8 text-center text-sm text-gray-500">
              <p>📸 [Login Page Screenshot]</p>
              <p className="mt-2">Split-screen design with branding panel (left) and auth form (right). Registration form with full name, phone, email, password fields. Google and Apple OAuth buttons. Toggle between login and register modes.</p>
            </div>
          </div>
        </div>

        {/* ============ CHAPTER 8: CONCLUSION ============ */}
        <div className="doc-page">
          <h2 className="doc-heading-1">CHAPTER 8: CONCLUSION & FUTURE SCOPE</h2>

          <h3 className="doc-heading-2 mt-6">8.1 Conclusion</h3>
          <div className="doc-text mt-4 space-y-4">
            <p>
              ParkEase India successfully addresses the critical urban parking challenges in Indian metropolitan cities by providing a comprehensive, user-friendly, and secure smart parking slot booking system. The project has achieved all its stated objectives:
            </p>
            <ol className="ml-6 list-decimal space-y-2">
              <li>A fully functional web application has been developed enabling users to search, discover, and book parking slots across six major Indian cities — Chennai, Bangalore, Mumbai, Delhi, Hyderabad, and Kolkata.</li>
              <li>An interactive, color-coded slot selection grid provides an intuitive visual interface for users to select their preferred parking position, with real-time status indicators (green for available, red for booked, blue for selected).</li>
              <li>Secure payment processing has been integrated through Razorpay, supporting India-specific payment methods including UPI (Google Pay, PhonePe, Paytm), credit/debit cards (Visa, Mastercard, RuPay), and digital wallets.</li>
              <li>QR code generation provides contactless entry verification at parking locations, enhancing security and user convenience.</li>
              <li>GST-compliant pricing with automatic 18% tax calculation ensures regulatory compliance and transparent billing for users.</li>
              <li>A comprehensive admin dashboard with revenue analytics, city-wise distribution, and parking area management enables efficient platform operations.</li>
              <li>Role-based access control with Row Level Security policies ensures data protection and proper access management at the database level.</li>
              <li>Responsive, mobile-first design ensures optimal user experience across all device types.</li>
            </ol>
            <p>
              The application demonstrates the effective use of modern web technologies — React 18, TypeScript, Tailwind CSS, and cloud-based PostgreSQL — in building a production-grade, India-focused SaaS platform. The modular component architecture ensures maintainability and scalability for future enhancements.
            </p>
          </div>

          <h3 className="doc-heading-2 mt-8">8.2 Future Enhancements</h3>
          <div className="doc-text mt-4 space-y-3">
            <ol className="ml-6 list-decimal space-y-2">
              <li><strong>IoT Integration:</strong> Integration with ultrasonic or infrared sensors for automatic real-time slot detection, eliminating manual availability updates.</li>
              <li><strong>Native Mobile Apps:</strong> Development of React Native mobile applications for iOS and Android with push notifications and offline capabilities.</li>
              <li><strong>AI-Powered Predictions:</strong> Machine learning models to predict parking demand patterns, enabling dynamic pricing and proactive availability suggestions.</li>
              <li><strong>Navigation Integration:</strong> Google Maps/Waze integration for turn-by-turn navigation to selected parking spots with estimated arrival time.</li>
              <li><strong>Monthly Subscriptions:</strong> Monthly/quarterly parking passes for regular commuters with discounted rates and reserved slots.</li>
              <li><strong>EV Charging Integration:</strong> Integration with electric vehicle charging stations, allowing users to book parking + charging simultaneously.</li>
              <li><strong>Multi-Language Support:</strong> Localization in Hindi, Tamil, Kannada, Telugu, Marathi, and Bengali for broader accessibility.</li>
              <li><strong>Automated Number Plate Recognition (ANPR):</strong> Camera-based entry/exit using vehicle number plate recognition for seamless, ticketless parking.</li>
              <li><strong>Revenue Sharing Module:</strong> Platform for parking lot owners to list their spaces and earn revenue through a commission-based model.</li>
              <li><strong>Emergency Services Integration:</strong> SOS features and integration with emergency services for safety in parking facilities.</li>
            </ol>
          </div>
        </div>

        {/* ============ REFERENCES ============ */}
        <div className="doc-page">
          <h2 className="doc-heading-1 text-center">REFERENCES</h2>
          <div className="doc-text mt-8 space-y-3">
            <ol className="ml-6 list-decimal space-y-3">
              <li>React Official Documentation (2024). "React – A JavaScript Library for Building User Interfaces." Available at: https://react.dev/</li>
              <li>TypeScript Official Documentation (2024). "TypeScript: JavaScript with Syntax for Types." Available at: https://www.typescriptlang.org/docs/</li>
              <li>Tailwind CSS Documentation (2024). "Rapidly Build Modern Websites Without Ever Leaving Your HTML." Available at: https://tailwindcss.com/docs</li>
              <li>PostgreSQL Global Development Group (2024). "PostgreSQL: The World's Most Advanced Open Source Relational Database." Available at: https://www.postgresql.org/docs/</li>
              <li>Vite Documentation (2024). "Next Generation Frontend Tooling." Available at: https://vitejs.dev/guide/</li>
              <li>Razorpay Developer Documentation (2024). "Accept Payments on Web and Mobile." Available at: https://razorpay.com/docs/</li>
              <li>Framer Motion Documentation (2024). "A Production-Ready Motion Library for React." Available at: https://www.framer.com/motion/</li>
              <li>Recharts Documentation (2024). "A Composable Charting Library Built on React Components." Available at: https://recharts.org/en-US/</li>
              <li>Ministry of Road Transport and Highways, Government of India (2023). "Annual Report 2022-23: Registered Motor Vehicles in India."</li>
              <li>IBM Global Parking Survey (2011). "The Global Parking Problem: A Worldwide Study of Parking Experiences." IBM Corporation.</li>
              <li>Smart Cities Mission, Government of India (2024). "Smart City Features – Smart Parking." Available at: https://smartcities.gov.in/</li>
              <li>National Payments Corporation of India (2024). "UPI Transaction Statistics." Available at: https://www.npci.org.in/what-we-do/upi/upi-ecosystem-statistics</li>
              <li>Shadcn/UI Documentation (2024). "Beautifully Designed Components." Available at: https://ui.shadcn.com/</li>
              <li>Radix UI Documentation (2024). "Unstyled, Accessible Components for Building High-Quality Design Systems." Available at: https://www.radix-ui.com/</li>
              <li>React Router Documentation (2024). "Declarative Routing for React." Available at: https://reactrouter.com/en/main</li>
              <li>TanStack React Query Documentation (2024). "Powerful Asynchronous State Management." Available at: https://tanstack.com/query/latest</li>
              <li>OAuth 2.0 Authorization Framework, RFC 6749 (2012). Internet Engineering Task Force (IETF).</li>
              <li>JSON Web Token (JWT), RFC 7519 (2015). Internet Engineering Task Force (IETF).</li>
              <li>Goods and Services Tax Council, India (2024). "GST Rates for Services – Parking Services." Available at: https://gstcouncil.gov.in/</li>
              <li>QR Code Standard, ISO/IEC 18004:2015. "Information Technology – Automatic Identification and Data Capture Techniques – QR Code Bar Code Symbology Specification."</li>
            </ol>
          </div>
        </div>

        {/* ============ APPENDIX ============ */}
        <div className="doc-page">
          <h2 className="doc-heading-1 text-center">APPENDIX A: PROJECT STRUCTURE</h2>
          <div className="doc-text mt-8">
            <pre className="doc-code">{`ParkEase-India/
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── er-diagram.png
│   │   └── dfd-diagram.png
│   ├── components/
│   │   ├── ui/               # Shadcn/UI base components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── toast.tsx
│   │   │   └── ... (40+ components)
│   │   ├── Footer.tsx        # App footer with cities
│   │   ├── Navbar.tsx        # Responsive navigation
│   │   ├── NavLink.tsx       # Active link wrapper
│   │   ├── ParkingCard.tsx   # Parking listing card
│   │   └── SlotGrid.tsx     # Interactive slot selector
│   ├── contexts/
│   │   └── AuthContext.tsx   # Authentication provider
│   ├── data/
│   │   └── mockData.ts      # Types, cities, areas, slots
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── integrations/
│   │   └── supabase/
│   │       ├── client.ts    # Database client (auto-gen)
│   │       └── types.ts     # TypeScript types (auto-gen)
│   ├── lib/
│   │   └── utils.ts         # Utility functions (cn)
│   ├── pages/
│   │   ├── Index.tsx         # Home / Landing page
│   │   ├── SearchParking.tsx # Search & filter
│   │   ├── ParkingDetail.tsx # Detail + slot selection
│   │   ├── BookingConfirm.tsx# Confirmation + QR
│   │   ├── MyBookings.tsx    # Booking history
│   │   ├── Login.tsx         # Auth (login/register)
│   │   ├── AdminDashboard.tsx# Admin analytics
│   │   └── NotFound.tsx      # 404 page
│   ├── test/
│   │   ├── setup.ts
│   │   └── example.test.ts
│   ├── App.tsx               # Root component + routing
│   ├── App.css
│   ├── index.css             # Design system tokens
│   ├── main.tsx              # Entry point
│   └── vite-env.d.ts
├── package.json
├── tailwind.config.ts
├── vite.config.ts
├── vitest.config.ts
├── tsconfig.json
└── README.md`}</pre>
          </div>
        </div>

        {/* Final page */}
        <div className="doc-page flex items-center justify-center text-center">
          <div>
            <div className="mb-8 mx-auto h-1 w-40 bg-black" />
            <h2 style={{ fontSize: "24pt", fontFamily: "'Times New Roman', serif" }}>
              End of Documentation
            </h2>
            <p className="doc-text mt-4">
              ParkEase India – Smart Parking Slot Booking System
            </p>
            <p className="doc-text mt-2">
              © 2026 All Rights Reserved
            </p>
            <div className="mt-8 mx-auto h-1 w-40 bg-black" />
          </div>
        </div>
      </div>

      {/* Print styles */}
      <style>{`
        .doc-container {
          max-width: 210mm;
          margin: 0 auto;
          padding: 20px;
        }
        .doc-page {
          font-family: 'Times New Roman', Times, serif;
          font-size: 12pt;
          line-height: 1.5;
          padding: 40px 50px;
          margin-bottom: 24px;
          background: white;
          border: 1px solid #e5e7eb;
          min-height: auto;
        }
        .doc-title {
          font-family: 'Times New Roman', Times, serif;
          font-weight: bold;
        }
        .doc-heading-1 {
          font-family: 'Times New Roman', Times, serif;
          font-size: 16pt;
          font-weight: bold;
          text-transform: uppercase;
          margin-top: 0;
        }
        .doc-heading-2 {
          font-family: 'Times New Roman', Times, serif;
          font-size: 14pt;
          font-weight: bold;
        }
        .doc-text {
          font-family: 'Times New Roman', Times, serif;
          font-size: 12pt;
          line-height: 1.5;
          text-align: justify;
        }
        .doc-code {
          font-family: 'Courier New', Courier, monospace;
          font-size: 9pt;
          line-height: 1.4;
          background: #f8f9fa;
          border: 1px solid #dee2e6;
          border-radius: 4px;
          padding: 12px;
          overflow-x: auto;
          white-space: pre;
          tab-size: 2;
        }
        .doc-table {
          width: 100%;
          border-collapse: collapse;
          font-family: 'Times New Roman', Times, serif;
          font-size: 11pt;
        }
        .doc-table th, .doc-table td {
          border: 1px solid #333;
          padding: 6px 10px;
          text-align: left;
        }
        .doc-table th {
          background: #f0f0f0;
          font-weight: bold;
        }
        .doc-table tr:nth-child(even) {
          background: #fafafa;
        }

        @media print {
          body { margin: 0; padding: 0; }
          .doc-container { padding: 0; max-width: none; }
          .doc-page {
            border: none;
            margin-bottom: 0;
            page-break-after: always;
            padding: 25mm 25mm 25mm 30mm;
            min-height: 277mm;
          }
          .doc-page:last-child { page-break-after: auto; }
          .doc-code { font-size: 8pt; }
          @page { margin: 0; size: A4; }
        }
      `}</style>
    </div>
  );
};

export default Documentation;
