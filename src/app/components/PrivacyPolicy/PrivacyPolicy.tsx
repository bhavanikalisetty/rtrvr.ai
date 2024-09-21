// PrivacyPolicy.tsx
import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-title">Privacy Notice</h1>
      <p className="privacy-policy-last-update">
        <em>Last Update: Sept 21, 2024</em>
      </p>
      <p>
        This Privacy Notice is designed to help you understand how rtrvr.ai
        (“<strong className="privacy-policy-highlight">rtrvr.ai</strong>,” “<strong className="privacy-policy-highlight">we</strong>,” “<strong className="privacy-policy-highlight">us</strong>,” or{' '}
        <strong className="privacy-policy-highlight">our</strong>”) collects, uses,
        and shares your personal information, and to help you understand and
        exercise your privacy rights.
      </p>

      <h3 className="privacy-policy-section-title">Notice at Collection</h3>
      <p>
        At or before the time of collection, California residents may have a
        right to receive notice of our practices, including the{' '}
        <a href="#californiaresidents" className="privacy-policy-link">
          categories
        </a>{' '}
        of personal information to be collected, the{' '}
        <a href="#howweuse" className="privacy-policy-link">
          purposes
        </a>{' '}
        for which such information is collected or used, whether such information
        is{' '}
        <a href="#californiaresidents" className="privacy-policy-link">
          sold or shared
        </a>{' '}
        and how to{' '}
        <a href="#californiaresidents" className="privacy-policy-link">
          opt-out
        </a>{' '}
        of such uses, and how long such information is{' '}
        <a href="#retention" className="privacy-policy-link">
          retained
        </a>
        . You can find those details in this statement by clicking on the above
        links.
      </p>

      <ol className="privacy-policy-list">
        <li>
          <a href="#scrope" className="privacy-policy-link">
            Scope and updates to this Privacy Notice
          </a>
        </li>
        <li>
          <a href="#personalinformation" className="privacy-policy-link">
            Personal information we collect
          </a>
        </li>
        <li>
          <a href="#howweuse" className="privacy-policy-link">
            How we use your personal information
          </a>
        </li>
        <li>
          <a href="#disclosure" className="privacy-policy-link">
            How we disclose your personal information
          </a>
        </li>
        <li>
          <a href="#privacychoices" className="privacy-policy-link">
            Your privacy choices and rights
          </a>
        </li>
        <li>
          <a href="#internationaltrasnfers" className="privacy-policy-link">
            International transfers of personal information
          </a>
        </li>
        <li>
          <a href="#retention" className="privacy-policy-link">
            Retention of personal information
          </a>
        </li>
        <li>
          <a href="#californiaresidents" className="privacy-policy-link">
            Supplemental notice for California residents
          </a>
        </li>
        <li>
          <a href="#nevadaresidents" className="privacy-policy-link">
            Supplemental notice for Nevada residents
          </a>
        </li>
        <li>
          <a href="#childrensinformation" className="privacy-policy-link">
            Children&apos;s information
          </a>
        </li>
        <li>
          <a href="#otherprovisions" className="privacy-policy-link">
            Other provisions
          </a>
        </li>
        <li>
          <a href="#contactus" className="privacy-policy-link">
            Contact us
          </a>
        </li>
      </ol>

      <h3 className="privacy-policy-section-title" id="scrope">
        1. Scope and updates to this Privacy Notice
      </h3>
      <p>
        This Privacy Notice applies to personal information processed by us,
        including on our websites, browser extensions, applications, and other
        online or offline services and offerings. To make this Privacy Notice
        easier to read, our websites and other offerings are collectively called
        the “<strong className="privacy-policy-highlight">Services</strong>.”
      </p>
      <h4 className="privacy-policy-subsection-title">
        Changes to our Privacy Notice
      </h4>
      <p>
        We may revise this Privacy Notice from time to time in our sole
        discretion. If there are any material changes to this Privacy Notice, we
        will notify you as required by applicable law. You understand and agree
        that you will be deemed to have accepted the updated Privacy Notice if
        you continue to use our Services after the new Privacy Notice takes
        effect.
      </p>

      {/* ---  START OF PERSONAL INFORMATION SECTION --- */} 
      <h3 className="privacy-policy-section-title" id="personalinformation">
        2. Personal information we collect
      </h3>
      <p>
        The categories of personal information we collect depend on how you
        interact with us, our Services, and the requirements of applicable law.
        We collect information that you provide to us, information we obtain
        automatically when you use our Services, and information from other
        sources such as third-party services and organizations, as described
        below.
      </p>
      <h4 className="privacy-policy-subsection-title">
        A. Personal Information You Provide to Us Directly
      </h4>
      <p>We may collect personal information that you provide to us.</p>

      <ul className="privacy-policy-list list-disc ml-8">
        <li>
          <strong className="privacy-policy-highlight">
            Account Information
          </strong>
          . We may collect personal information in connection with the creation
          or administration of your account, such as your name, email address,
          phone number, profile picture, and address. You may also use
          third-party websites, services, products, and technology
          (collectively, “
          <strong className="privacy-policy-highlight">
            Third-Party Services
          </strong>
          ”) to import or otherwise provide information to the Services.
        </li>

        {/* ... (Add other list items for Account Information) ... */}

        <li>
          <strong className="privacy-policy-highlight">Purchases</strong>. We
          may collect personal information and details associated with your
          purchases, including payment information. Any payments made via our
          Services are processed by third-party payment processors. We do not
          directly collect or store any payment card information entered through
          our Services, but we may receive information associated with your
          payment card information (e.g., your billing details).
        </li>

        {/* ... (Add other list items for Purchases, Communications, etc.) ... */}
      </ul>

      <h4 className="privacy-policy-subsection-title">
        B. Personal Information Collected Automatically
      </h4>
      <p>We may collect personal information automatically when you use our Services.</p>

      <ul className="privacy-policy-list list-disc ml-8">
        <li>
          <strong className="privacy-policy-highlight">
            Automatic Collection of Personal Information
          </strong>
          . We may collect certain information automatically when you use our
          Services, such as your Internet protocol (IP) address, user settings,
          MAC address, cookie identifiers, mobile carrier, mobile advertising
          and other unique identifiers, browser or device information, location
          information (including approximate location derived from IP address),
          and Internet service provider. We may also automatically collect
          information regarding your use of our Services, such as pages that you
          visit before, during and after using our Services, items that you
          search for via the Services, information about the links you click,
          the types of content you interact with, the frequency and duration of
          your activities, and other information about how you use our Services.
        </li>
        <li>
          <strong className="privacy-policy-highlight">
            Cookie Policy (and Other Technologies).
          </strong>{' '}
          We, as well as third parties that provide content, advertising, or
          other functionality on our Services, may use cookies, pixel tags, and
          other technologies (“
          <strong className="privacy-policy-highlight">Technologies</strong>”)
          to automatically collect information through your use of our Services.
        </li>
        <ul className="privacy-policy-list list-disc ml-8">
          <li>
            <strong className="privacy-policy-highlight">Cookies</strong>.
            Cookies are small text files placed in device browsers that store
            preferences and facilitate and enhance your experience.
          </li>
          <li>
            <strong className="privacy-policy-highlight">
              Pixel Tags/Web Beacons
            </strong>
            . A pixel tag (also known as a web beacon) is a piece of code
            embedded in our Services that collects information about engagement
            on our Services. The use of a pixel tag allows us to record, for
            example, that a user has visited a particular web page or clicked on
            a particular advertisement. We may also include web beacons in
            emails to understand whether messages have been opened, acted on, or
            forwarded.
          </li>
        </ul>
      </ul>

      <p>
        Our uses of these Technologies fall into the following general
        categories:
      </p>
      <ul className="privacy-policy-list list-disc ml-8">
        <li>
          <strong className="privacy-policy-highlight">
            Operationally Necessary
          </strong>
          . This includes Technologies that allow you access to our Services,
          applications, and tools that are required to identify irregular
          website behavior, prevent fraudulent activity, improve security, or
          allow you to make use of our functionality;
        </li>

        {/* ... (Add other list items for Performance-Related, Functionality-Related, etc.) ... */}
      </ul>

           {/* ---  C. Personal Information Collected From Other Sources --- */} 
           <h4 className="privacy-policy-subsection-title">
        C. Personal Information Collected from Other Sources, including 3rd party integrations
      </h4>
      <ul className="privacy-policy-list list-disc ml-8">
        <li>
          <strong className="privacy-policy-highlight">
            Third-Party Services and Sources
          </strong>
          . We may obtain personal information about you from other sources,
          including through third-party services and organizations. For
          example, if you access our Services through a third-party application
          (such as the Chrome Web Store or other website or application
          marketplaces), we may collect personal information about you from that
          third-party application that you have made available via your privacy
          settings.
        </li>
        <li>
          <strong className="privacy-policy-highlight">
            Referrals and Sharing Features
          </strong>
          . Our Services may offer various tools and functionalities that allow
          you to provide personal information about your friends through our
          referral service. Our referral services may also allow you to forward
          or share certain content with a friend or colleague, such as an email
          inviting your friend to use our Services. Please only share with us
          contact information of people with whom you have a relationship
          (e.g., relative, friend, neighbor, or co-worker).
        </li>
        <li>
          <strong className="privacy-policy-highlight">
            Retention and usage of 3rd Party data
          </strong>
          . Any personal information obtained via any 3rd Party API
          integration, including, but not limited to Google Drive, Google Mail,
          and others, will only be used for providing and improving automation
          features of the product. This data will not be used for training of
          any generalized AI models, internal or external. We do not retain any
          data obtained through 3rd party APIs.
        </li>
      </ul>

      {/* ---  3. HOW WE USE YOUR PERSONAL INFORMATION --- */} 
      <h3 className="privacy-policy-section-title" id="howweuse">
        3. How we use your personal information
      </h3>
      <p>
        We use your personal information for a variety of business purposes,
        including to provide our Services, for administrative purposes, and to
        market our products and Services, as described below.
      </p>
      <h4 className="privacy-policy-subsection-title">
        A. Provide Our Services
      </h4>
      <p>
        We use your personal information to fulfill our contract with you and
        provide you with our Services, such as:
      </p>
      <ul className="privacy-policy-list list-disc ml-8">
        <li>Managing your information and accounts;</li>
        <li>Providing access to certain areas, functionalities, and features of our Services;</li>
        <li>Answering requests for customer or technical support;</li>
        <li>Communicating with you about your account, activities on our Services, and policy changes;</li>
        <li>Processing your financial information and other payment methods for products or Services purchased;</li>
        <li>Processing applications if you apply for a job we post on our Services; and</li>
        <li>Allowing you to register for events.</li>
      </ul>

      <h4 className="privacy-policy-subsection-title">
        B. Administrative Purposes
      </h4>
      <p>We use your personal information for various administrative purposes, such as:</p>
      <ul className="privacy-policy-list list-disc ml-8">
        <li>
          Pursuing our legitimate interests such as direct marketing, research
          and development (including marketing research), network and
          information security, and fraud prevention;
        </li>
        <li>
          Detecting security incidents, protecting against malicious,
          deceptive, fraudulent, or illegal activity, and prosecuting those
          responsible for that activity;
        </li>
        <li>Measuring interest and engagement in our Services;</li>
        <li>Improving, upgrading, or enhancing our Services;</li>
        <li>Developing new products and services;</li>
        <li>Ensuring internal quality control and safety;</li>
        <li>
          Authenticating and verifying individual identities, including
          requests to exercise your rights under this Privacy Notice;
        </li>
        <li>Debugging to identify and repair errors with our Services;</li>
        <li>
          Auditing relating to interactions, transactions, and other compliance
          activities;
        </li>
        <li>Sharing personal information with third parties as needed to provide the Services;</li>
        <li>Enforcing our agreements and policies; and</li>
        <li>Carrying out activities that are required to comply with our legal obligations.</li>
      </ul>

      <h4 className="privacy-policy-subsection-title">
        C. Marketing and Advertising our Products and Services
      </h4>
      <p>
        We may use personal information to tailor and provide you with content
        and advertisements. We may provide you with these materials as
        permitted by applicable law. <br />
        <br />
        Some of the ways we may market to you include email campaigns, text
        messages, custom audiences advertising, “personalized advertising” and
        “targeted advertising,” including through cross-device tracking.
        <br />
        <br />
        If you have any questions about our marketing practices, you may contact
        us at any time as set forth in “
        <a href="#contactus" className="privacy-policy-link">
          Contact Us
        </a>
        ” below. <br />
        <br />
        The above-mentioned personal data is only limited to personal and
        app-usage information you have shared with rtrvr.ai directly through
        its services. It explicitly excludes any personal information shared
        via 3rd Party providers, such as integrations or Google user data. Such
        3rd Party information or Google user data may only be used for
        providing or improving user-facing features or executing automations
        for the user.
      </p>

      <h4 className="privacy-policy-subsection-title">
        D. With Your Consent
      </h4>
      <p>
        We may use personal information for other purposes that are clearly
        disclosed to you at the time you provide personal information or with
        your consent.
      </p>

      <h4 className="privacy-policy-subsection-title">E. Other Purposes</h4>
      <p>
        We also use your personal information for other purposes as requested
        by you or as permitted by applicable law.
      </p>
      <ul className="privacy-policy-list list-disc ml-8">
        <li>
          <strong className="privacy-policy-highlight">
            De-identified and Aggregated Information
          </strong>
          . We may use personal information to create de-identified and/or
          aggregated information, such as information about how you use the
          Services, information about the device from which you access our
          Services, or other analyses we create. De-identified and/or
          aggregated information is not personal information, and we may use,
          disclose, and retain such information as permitted by applicable laws
          including, but not limited to, for research, analysis, analytics, and
          any other legally permissible purposes.
        </li>
      </ul>

      {/* --- 4. HOW WE DISCLOSE YOUR PERSONAL INFORMATION --- */}
      <h3 className="privacy-policy-section-title" id="disclosure">
        4. How we disclose your personal information
      </h3>
      <p>
        We disclose your personal information to third parties for a variety of
        business purposes, including to provide our Services, to protect us or
        others, or in the event of a major business transaction such as a
        merger, sale, or asset transfer, as described below.
      </p>

      <h4 className="privacy-policy-subsection-title">
        A. Disclosures to Provide our Services
      </h4>
      <p>
        The categories of third parties with whom we may share your personal
        information are described below.
      </p>

      <ul className="privacy-policy-list list-disc ml-8">
        <li>
          <strong className="privacy-policy-highlight">
            Third-Party Services You Share or Interact With
          </strong>
          . Certain features and functionalities of the Services may link to or
          allow you to interface, interact, share information with, direct us to
          share information with, access and/or use Third Party Services. Any
          information shared with or otherwise collected by a Third-Party
          Service may be subject to the Third-Party Service’s privacy policy. We
          are not responsible for the processing of personal information by
          Third-Party Services.
        </li>
        <li>
          <strong className="privacy-policy-highlight">Service Providers</strong>
          . We may share your personal information with our third-party service
          providers and vendors that assist us with the provision of our
          Services. This includes service providers and vendors that provide us
          with IT support, hosting, payment processing, customer service,
          debugging and error discovery and management, analytics,
          visualization, data routing, data processing and data storage and
          related services.
        </li>
        <li>
          <strong className="privacy-policy-highlight">
            Business Partners
          </strong>
          . We may share your personal information with business partners to
          provide you with a product or service you have requested. We may also
          share your personal information with business partners with whom we
          jointly offer products or services.
        </li>
        <li>
          <strong className="privacy-policy-highlight">Affiliates</strong>. We
          may share your personal information with our corporate affiliates.
        </li>
        <li>
          <strong className="privacy-policy-highlight">
            Advertising Partners
          </strong>
          . We may share your personal information with third-party advertising
          partners. These third-party advertising partners may set Technologies
          and other tracking tools on our Services to collect information
          regarding your activities and your device (e.g., your IP address,
          cookie identifiers, page(s) visited, location, time of day). These
          advertising partners may use this information (and similar
          information collected from other services) for purposes of delivering
          personalized advertisements to you when you visit digital properties
          within their networks. This practice is commonly referred to as
          “interest-based advertising”, “personalized advertising”, or
          “targeted advertising.”
        </li>
      </ul>

      <h4 className="privacy-policy-subsection-title">
        B. Disclosures to Protect Us or Others
      </h4>
      <p>
        We may access, preserve, and disclose any information we store
        associated with you to external parties if we, in good faith, believe
        doing so is required or appropriate to: comply with law enforcement or
        national security requests and legal process, such as a court order or
        subpoena; protect your, our, or others’ rights, property, or safety;
        enforce our policies or contracts; collect amounts owed to us; or assist
        with an investigation or prosecution of suspected or actual illegal
        activity.
      </p>

      <h4 className="privacy-policy-subsection-title">
        C. Disclosure in the Event of Merger, Sale, or Other Asset Transfers
      </h4>
      <p>
        If we are involved in a merger, acquisition, financing due diligence,
        reorganization, bankruptcy, receivership, purchase or sale of assets, or
        transition of service to another provider, your information may be sold
        or transferred as part of such a transaction, as permitted by law
        and/or contract.
      </p>

      {/* --- 5. YOUR PRIVACY CHOICES AND RIGHTS --- */}
      <h3 className="privacy-policy-section-title" id="privacychoices">
        5. Your privacy choices and rights
      </h3>
      <p>
        <strong className="privacy-policy-highlight">Your Privacy Choices</strong>
        . The privacy choices you may have about your personal information are
        determined by applicable law and are described below.
      </p>
      <ul className="privacy-policy-list list-disc ml-8">
        <li>
          <strong className="privacy-policy-highlight">
            Email Communications
          </strong>
          . If you receive an unwanted email from us, you can use the
          unsubscribe link found at the bottom of the email to opt-out of
          receiving future emails. Note that you will continue to receive
          transaction-related emails regarding products or Services you have
          requested. We may also send you certain non-promotional
          communications regarding us and our Services, and you will not be able
          to opt-out of those communications (e.g., communications regarding
          our Services or updates to our Terms or this Privacy Notice, or
          Payment related communications).
        </li>
        <li>
          <strong className="privacy-policy-highlight">Text Messages</strong>.
          If you receive an unwanted text message from us, you may opt-out of
          receiving future text messages from us by following the instructions
          in the text message you have received from us or by otherwise
          contacting us as set forth in “
          <a href="#contactus" className="privacy-policy-link">
            Contact Us
          </a>
          ” below.
        </li>
        <li>
          <strong className="privacy-policy-highlight">Phone Calls</strong>. If
          you receive an unwanted marketing phone call from us, you may opt-out
          of receiving future phone calls from us by following the instructions
          which may be available on the call or by otherwise contacting us as
          set forth in “
          <a href="#contactus" className="privacy-policy-link">
            Contact Us
          </a>
          ” below.
        </li>
        <li>
          <strong className="privacy-policy-highlight">“Do Not Track.”</strong>{' '}
          Do Not Track (“
          <strong className="privacy-policy-highlight">DNT</strong>”) is a
          privacy preference that users can set in certain web browsers. Please
          note that we do not respond to or honor DNT signals or similar
          mechanisms transmitted by web browsers.
        </li>
        <li>
          <strong className="privacy-policy-highlight">
            Cookies and Personalized Advertising
          </strong>
          . You may stop or restrict the placement of Technologies on your
          device or remove them by adjusting your preferences as your browser
          or device permits. However, if you adjust your preferences, our
          Services may not work properly. Please note that cookie-based
          opt-outs are not effective on mobile applications. However, you may
          opt-out of personalized advertisements on some mobile applications by
          following the instructions for{' '}
          <a
            href="https://support.google.com/googleplay/android-developer/answer/6048248?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="privacy-policy-link"
          >
            Android
          </a>
          ,{' '}
          <a
            href="https://support.apple.com/en-us/HT202074"
            target="_blank"
            rel="noopener noreferrer"
            className="privacy-policy-link"
          >
            iOS
          </a>
          , and{' '}
          <a
            href="https://www.networkadvertising.org/mobile-choice/"
            target="_blank"
            rel="noopener noreferrer"
            className="privacy-policy-link"
          >
            others
          </a>
          .
          <br />
          The online advertising industry also provides websites from which you
          may opt-out of receiving targeted ads from data partners and other
          advertising partners that participate in self-regulatory programs. You
          can access these and learn more about targeted advertising and
          consumer choice and privacy by visiting the{' '}
          <a
            href="http://www.networkadvertising.org/managing/opt_out.asp"
            target="_blank"
            rel="noopener noreferrer"
            className="privacy-policy-link"
          >
            Network Advertising Initiative
          </a>
          ,{' '}
          <a
            href="http://www.aboutads.info/choices/"
            target="_blank"
            rel="noopener noreferrer"
            className="privacy-policy-link"
          >
            the Digital Advertising Alliance
          </a>
          ,{' '}
          <a
            href="https://www.youronlinechoices.eu/"
            target="_blank"
            rel="noopener noreferrer"
            className="privacy-policy-link"
          >
            the European Digital Advertising Alliance
          </a>
          , and{' '}
          <a
            href="https://youradchoices.ca/choices/"
            target="_blank"
            rel="noopener noreferrer"
            className="privacy-policy-link"
          >
            the Digital Advertising Alliance of Canada
          </a>
          . <br />
          Please note you must separately opt-out in each browser and on each
          device.
        </li>
      </ul>

      <p>
        <strong className="privacy-policy-highlight">Your Privacy Rights</strong>
        . In accordance with applicable law, you may have the right to:
      </p>
      <ul className="privacy-policy-list list-disc ml-8">
        <li>
          <strong className="privacy-policy-highlight">
            Confirm Whether We Are Processing Your Personal Information
          </strong>{' '}
          (the right to know);
        </li>
        <li>
          <strong className="privacy-policy-highlight">
            Access to and Portability of Your Personal Information
          </strong>
          , including: (i) obtaining access to or a copy of your personal
          information; and (ii) receiving an electronic copy of personal
          information that you have provided to us, or asking us to send that
          information to another company in a structured, commonly used, and
          machine-readable format (also known as the “right of data
          portability”);
        </li>
        <li>
          <strong className="privacy-policy-highlight">
            Request Correction
          </strong>{' '}
          of your personal information where it is inaccurate or incomplete;
        </li>
        <li>
          <strong className="privacy-policy-highlight">
            Request Deletion
          </strong>{' '}
          of your personal information;
        </li>
        <li>
          <strong className="privacy-policy-highlight">
            Request to Opt-Out of Certain Processing Activities
          </strong>{' '}
          including, as applicable, if we process your personal information for
          “targeted advertising” (as “targeted advertising” is defined by
          applicable privacy laws), if we “sell” your personal information (as
          “sell” is defined by applicable privacy laws), or if we engage in
          “profiling” in furtherance of certain “decisions that produce legal
          or similarly significant effects” concerning you (as such terms are
          defined by applicable privacy laws);
        </li>
        <li>
          <strong className="privacy-policy-highlight">
            Request Restriction of or Object to
          </strong>{' '}
          our processing of your personal information;
        </li>
        <li>
          <strong className="privacy-policy-highlight">
            Withdraw your Consent
          </strong>{' '}
          to our processing of your personal information. Please note that your
          withdrawal will only take effect for future processing and will not
          affect the lawfulness of processing before the withdrawal; and
        </li>
        <li>
          <strong className="privacy-policy-highlight">
            Appeal our Decision
          </strong>{' '}
          to decline to process your request.
        </li>
      </ul>
      <p>
        If you would like to exercise any of these rights, please contact us as
        set forth in “
        <a href="#contactus" className="privacy-policy-link">
          Contact Us
        </a>
        ” below. We will process such requests in accordance with applicable
        laws.
        <br />
        <br />
        If applicable laws grant you an appeal right and you would like to
        appeal our decision with respect to your request, you may do so by
        informing us of this and providing us with information supporting your
        appeal.
      </p>

      {/* --- 6. INTERNATIONAL TRANSFERS OF PERSONAL INFORMATION --- */}
      <h3
        className="privacy-policy-section-title"
        id="internationaltrasnfers"
      >
        6. International transfers of personal information
      </h3>
      <p>
        All personal information processed by us may be transferred, processed,
        and stored anywhere in the world, including, but not limited to, the
        United States or other countries, which may have data protection laws
        that are different from the laws where you live. We endeavor to
        safeguard your personal information consistent with the requirements of
        applicable laws.
        <br />
        <br />
        If we transfer personal information which originates in the European
        Economic Area, Switzerland, and/or the United Kingdom to a country that
        has not been found to provide an adequate level of protection under
        applicable data protection laws, one of the safeguards we may use to
        support such transfer is the{' '}
        <a
          href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc/standard-contractual-clauses-international-transfers_en"
          target="_blank"
          rel="noopener noreferrer"
          className="privacy-policy-link"
        >
          EU Standard Contractual Clauses
        </a>
        .
        <br />
        <br />
        For more information about the safeguards we use for international
        transfers of your personal information, please contact us as set forth
        below.
      </p>

      {/* --- 7. RETENTION OF PERSONAL INFORMATION --- */}
      <h3 className="privacy-policy-section-title" id="retention">
        7. Retention of personal information
      </h3>
      <p>
        We store the personal information we collect as described in this
        Privacy Notice for as long as you use our Services, or as necessary to
        fulfill the purpose(s) for which it was collected, provide our
        Services, resolve disputes, establish legal defenses, conduct audits,
        pursue legitimate business purposes, enforce our agreements, and comply
        with applicable laws.
        <br />
        <br />
        To determine the appropriate retention period for personal information,
        we may consider applicable legal requirements, the amount, nature, and
        sensitivity of the personal information, certain risk factors, the
        purposes for which we process your personal information, and whether we
        can achieve those purposes through other means.
      </p>

      {/* --- 8. SUPPLEMENTAL NOTICE FOR CALIFORNIA RESIDENTS --- */}
      <h3 className="privacy-policy-section-title" id="californiaresidents">
        8. Supplemental notice for California residents
      </h3>
      <p>
        This Supplemental Notice for California Residents supplements our
        Privacy Notice and only applies to our processing of personal
        information that is subject to the California Consumer Privacy Act of
        2018 (as amended from time to time) (“
        <strong className="privacy-policy-highlight">CCPA</strong>”). <br />
        <br />
        The CCPA provides California residents with the right to know what
        categories of personal information rtrvr.ai has collected about them,
        whether rtrvr.ai disclosed that personal information for a business
        purpose (e.g., to a service provider), whether rtrvr.ai “sold” that
        personal information, and whether rtrvr.ai “shared” that personal
        information for “cross-context behavioral advertising” in the preceding
        twelve months. California residents can find this information below:
      </p>
      {/* 
          IMPORTANT: Replace this placeholder with an appropriate table 
          (or an image of a table) that lists the CCPA-required information. 
      */}
      <p className="text-center italic">
        [Insert CCPA Table or Image of Table Here]
      </p>

      <p>
        The categories of sources from which we collect personal information
        and our business and commercial purposes for using and disclosing
        personal information are set forth in “
        <a href="#personalinformation" className="privacy-policy-link">
          Personal Information We Collect
        </a>
        ”, “
        <a href="#howweuse" className="privacy-policy-link">
          How We Use Your Personal Information
        </a>
        ”, and “
        <a href="#disclosure" className="privacy-policy-link">
          How We Disclose Your Personal Information
        </a>
        ” above, respectively. We will retain personal information in
        accordance with the time periods set forth in “
        <a href="#retention" className="privacy-policy-link">
          Retention of Personal Information.
        </a>
        ”
        <br />
        <br />
        We “sell” and “share” your personal information to provide you with
        “cross-context behavioral advertising” about rtrvr.ai&apos;s products and
        services.
      </p>

      <h4 className="privacy-policy-subsection-title">
        Additional Privacy Rights for California Residents
      </h4>
      <p>
        <strong className="privacy-policy-highlight">
          Opting Out of “Sales” of Personal Information and/or “Sharing” for
          Cross-Context Behavioral Advertising under the CCPA
        </strong>
        . <br />
        California residents have the right to opt-out of the “sale” of
        personal information and the “sharing” of personal information for
        “cross-context behavioral advertising.” California residents may
        exercise these rights by following the instructions on the cookie banner
        upon visiting our website, or by clicking{' '}
        {/* IMPORTANT: Replace this placeholder with your actual opt-out link */}
        <a href="#" className="privacy-policy-link">
          [here]
        </a>{' '}
        and following the instructions found on the website.
        <br />
        <br />
        <strong className="privacy-policy-highlight">
          Disclosure Regarding Individuals Under the Age of 16
        </strong>
        . <br />
        rtrvr.ai does not have actual knowledge of any “sale” of personal
        information of minors under 16 years of age. rtrvr.ai does not have
        actual knowledge of any “sharing” of personal information of minors
        under 16 years of age for “cross-context behavioral advertising.”
        <br />
        <br />
        <strong className="privacy-policy-highlight">
          Disclosure Regarding Opt-Out Preference Signals
        </strong>
        . <br />
        Applicable law may provide for an opt-out by broadcasting an Opt-Out
        Preference Signal, such as the Global Privacy Control (GPC) (on the
        browsers and/or browser extensions that support such a signal). To
        download and use a browser supporting the GPC browser signal, click
        here:
        <br />
        <a
          href="https://globalprivacycontrol.org/orgs"
          target="_blank"
          rel="noopener noreferrer"
          className="privacy-policy-link"
        >
          globalprivacycontrol.org/orgs
        </a>
        . If you choose to use the GPC signal, you will need to turn it on for
        each supported browser or browser extension you use.
        <br />
        <br />
        <strong className="privacy-policy-highlight">
          Disclosure Regarding Sensitive Personal Information
        </strong>
        . <br />
        rtrvr.ai only uses and discloses{' '}
        <a
          href="https://www.caprivacy.org/cpra-text/#1798.140(ae)"
          target="_blank"
          rel="noopener noreferrer"
          className="privacy-policy-link"
        >
          sensitive personal information
        </a>{' '}
        for the following purposes:
      </p>
      <ul className="privacy-policy-list list-disc ml-8">
        <li>
          To perform the services or provide the goods reasonably expected by an
          average consumer who requests those goods or services
        </li>
        <li>
          To prevent, detect, and investigate security incidents that compromise
          the availability, authenticity, integrity, and or confidentiality of
          stored or transmitted personal information.
        </li>
        <li>
          To resist malicious, deceptive, fraudulent, or illegal actions
          directed at rtrvr.ai and to prosecute those responsible for those
          actions.
        </li>
        <li>To ensure the physical safety of natural persons.</li>
        <li>
          To verify or maintain the quality or safety of a product, service, or
          device that is owned, manufactured, manufactured for, or controlled
          by rtrvr.ai, and to improve, upgrade, or enhance the service or device
          that is owned, manufactured by, manufactured for, or controlled by
          rtrvr.ai.
        </li>
        <li>For purposes that do not infer characteristics about individuals.</li>
      </ul>
      <p>
        <strong className="privacy-policy-highlight">Non-Discrimination</strong>
        . <br />
        California residents have the right not to receive discriminatory
        treatment by us for the exercise of their rights conferred by the CCPA.
        <br />
        <br />
        <strong className="privacy-policy-highlight">Verification</strong>.{' '}
        <br />
        To protect your privacy, we will take steps to reasonably verify your
        identity before fulfilling requests submitted under the CCPA. These
        steps may involve asking you to provide sufficient information that
        allows us to reasonably verify you are the person about whom we
        collected personal information or an authorized representative.
        Examples of our verification process may include asking you to provide
        the email address or phone number we have associated with you or
        following instructions on our website depending on how you use our
        Services.
        <br />
        <br />
        <strong className="privacy-policy-highlight">Authorized Agent</strong>.
        <br />
        Only you, or someone legally authorized to act on your behalf, may make
        a verifiable consumer request related to your personal information. To
        authorize an agent, provide written authorization signed by you and
        your designated agent using the information found in “
        <a href="#contactus" className="privacy-policy-link">
          Contact Us
        </a>
        ” below and ask us for additional instructions.
      </p>

      {/* --- 9. SUPPLEMENTAL NOTICE FOR NEVADA RESIDENTS --- */}
      <h3 className="privacy-policy-section-title" id="nevadaresidents">
        9. Supplemental notice for Nevada residents
      </h3>
      <p>
        If you are a resident of Nevada, you have the right to opt-out of the
        sale of certain personal information to third parties who intend to
        license or sell that personal information. Please note that we do not
        currently sell your personal information as sales are defined in
        Nevada Revised Statutes Chapter 603A. If you have any questions,
        please contact us as set forth in “
        <a href="#contactus" className="privacy-policy-link">
          Contact Us
        </a>
        ” below.
      </p>

      {/* --- 10. CHILDREN'S INFORMATION --- */}
      <h3 className="privacy-policy-section-title" id="childrensinformation">
        10. Children&apos;s information
      </h3>
      <p>
        The Services are not directed to children under 16 (or other age as
        required by local law), and we do not knowingly collect personal
        information from children.
        <br />
        <br />
        If you are a parent or guardian and believe your child has uploaded
        personal information to our site without your consent, you may contact
        us as described in “
        <a href="#contactus" className="privacy-policy-link">
          Contact Us
        </a>
        ” below. If we become aware that a child has provided us with personal
        information in violation of applicable law, we will delete any personal
        information we have collected, unless we have a legal obligation to
        keep it, and terminate the child’s account, if applicable.
      </p>

      {/* --- 11. OTHER PROVISIONS --- */}
      <h3 className="privacy-policy-section-title" id="otherprovisions">
        11. Other provisions
      </h3>
      <p>
        <strong className="privacy-policy-highlight">
          Third-Party Websites/Applications.
          <br />
        </strong>
        The Services may contain links to other websites/applications and other
        websites/applications may reference or link to our Services. These
        third-party services are not controlled by us. We encourage our users
        to read the privacy policies of each website and application with which
        they interact. We do not endorse, screen, or approve, and are not
        responsible for, the privacy practices or content of such other
        websites or applications. Providing personal information to
        third-party websites or applications is at your own risk.
        <br />
        <br />
        <strong className="privacy-policy-highlight">
          {' '}
          Supervisory Authority
        </strong>
        . <br />
        If your personal information is subject to the applicable data
        protection laws of the European Economic Area, Switzerland, or the
        United Kingdom, you have the right to lodge a complaint with the
        competent supervisory authority if you believe our processing of your
        personal information violates applicable law.
      </p>
      <ul className="privacy-policy-list list-disc ml-8">
        <li>
          <a
            href="https://edpb.europa.eu/about-edpb/board/members_en"
            target="_blank"
            rel="noopener noreferrer"
            className="privacy-policy-link"
          >
            EEA Data Protection Authorities (DPAs)
          </a>
        </li>
        <li>
          <a
            href="https://www.edoeb.admin.ch/edoeb/en/home/the-fdpic/contact.html"
            target="_blank"
            rel="noopener noreferrer"
            className="privacy-policy-link"
          >
            Swiss Federal Data Protection and Information Commissioner (FDPIC)
          </a>
        </li>
        <li>
          <a
            href="https://ico.org.uk/global/contact-us/"
            target="_blank"
            rel="noopener noreferrer"
            className="privacy-policy-link"
          >
            UK Information Commissioner’s Office (ICO)
          </a>
        </li>
      </ul>

      {/* --- 12. CONTACT US --- */}
      <h3 className="privacy-policy-section-title" id="contactus">
        12. Contact us
      </h3>
      <p>
        rtrvr.ai is the controller of the personal information we process under
        this Privacy Notice.
        <br />
        <br />
        If you have any questions about our privacy practices or this Privacy
        Notice, or to exercise your rights as detailed in this Privacy Notice,
        please contact us at:
        <br />
        <br />
        <strong className="privacy-policy-highlight">support@rtrvr.ai</strong>
      </p>
    </div>
  );
};

export default PrivacyPolicy;