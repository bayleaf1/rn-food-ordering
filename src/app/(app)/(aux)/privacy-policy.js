import AppText from '@components/AppText/AppText'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import useApi from '@libs/Api'
import { wp } from '@libs/Styling'
import { useScreenOrientationProvider } from '@providers/ScreenOrientationProvider'
import { useSessionProvider } from '@providers/SessionProvider'
import { useTranslationProvider } from '@providers/TranslationProvider'
import { ScrollView, View } from 'react-native'

let ContentWriting = (p) => <AppText {...p} size="lg" />

let VSpace = () => <View style={{ height: wp(3) }} />

let Section = ({ title, children }) => (
  <>
    <VSpace />
    <AppText size="xl" weight="medium">
      {title}
    </AppText>
    <VSpace />
    {children}
  </>
)

export default function Page() {
  let { signOut } = useSessionProvider()
  let { setLanguageAndSaveToStorage, AvailableLanguages } = useTranslationProvider()
  let { portraitOrLandscape } = useScreenOrientationProvider()

  let { data, statusCode } = useApi('/todos/1', { defaultData: {} })

  return (
    <SafeFullScreenLayout headerIsShown>
      <ScrollView tw={'flex-col'}>
        <Section title={'Privacy Policy'}>
          <ContentWriting>
            Welcome to the web site (the “Site”) of Fishbox Inc (“Fishbox”, “we”, “us” and/or
            “our”). This Site is operated by Fishbox and has been created to provide information
            about our company and our after hours package delivery services, mobile applications and
            related services (together with the Site, the “Services”) to our Service visitors. This
            Privacy Policy sets forth Fishbox’s policy with respect to information including
            personally identifiable data (“Personal Data”) and other information that is collected
            from visitors to and users of the Services.
          </ContentWriting>
        </Section>
        <Section title={'Information We Collect'}>
          <ContentWriting>
            When you interact with us through the Services, we may collect Personal Data and other
            information from you, as further described below:
          </ContentWriting>
        </Section>

        <Section title={'Personal Data That You Provide Through the Services'}>
          <ContentWriting>
            We collect Personal Data from you when you voluntarily provide such information, such as
            when you contact us with inquiries, respond to one of our surveys, register for access
            to the Services or use certain Services. Wherever Fishbox collects Personal Data we make
            an effort to provide a link to this Privacy Policy.
            <VSpace />
            By voluntarily providing us with Personal Data, you are consenting to our use of it in
            accordance with this Privacy Policy. If you provide Personal Data to the Services, you
            acknowledge and agree that such Personal Data may be transferred from your current
            location to the offices and servers of Fishbox and the authorized third parties referred
            to herein located in the United States.
          </ContentWriting>
        </Section>
        <Section title={'Non-Identifiable Data'}>
          <ContentWriting>
            When you interact with Fishbox through the Services, we receive and store certain
            personally non-identifiable information. Such information, which is collected passively
            using various technologies, cannot presently be used to specifically identify you.
            Fishbox may store such information itself or such information may be included in
            databases owned and maintained by Fishbox affiliates, agents or service providers. The
            Services may use such information and pool it with other information to track, for
            example, the total number of users of our Services and the domain names of our users’
            Internet service providers. It is important to note that no Personal Data is available
            or used in this process.
            <VSpace />
            In operating the Services, we may use a technology called "cookies." A cookie is a piece
            of information that the computer that hosts our Services gives to your browser when you
            access the Services. Our cookies help provide additional functionality to the Services
            and help us analyze Services usage more accurately. For instance, our Site may set a
            cookie on your browser that allows you to access the Services without needing to
            remember and then enter a password more than once during a visit to the Site. In all
            cases in which we use cookies, we will not collect Personal Data except with your
            permission. On most web browsers, you will find a “help” section on the toolbar. Please
            refer to this section for information on how to receive notification when you are
            receiving a new cookie and how to turn cookies off. We recommend that you leave cookies
            turned on because they allow you to take advantage of some of the Service features.
          </ContentWriting>
        </Section>
        <Section title={'Aggregated Personal Data'}>
          <ContentWriting>
            In an ongoing effort to better understand and serve the users of the Services, Fishbox
            often conducts research on its customer demographics, interests and behavior based on
            the Personal Data and other information provided to us. This research may be compiled
            and analyzed on an aggregate basis, and Fishbox may share this aggregate data with its
            affiliates, agents and business partners. This aggregate information does not identify
            you personally. Fishbox may also disclose aggregated user statistics in order to
            describe our services to current and prospective business partners, and to other third
            parties for other lawful purposes.
          </ContentWriting>
        </Section>
        <Section title={'Location Information'}>
          <ContentWriting>
            Our Service may collect and use your location information (for example, by using the GPS
            on your mobile device) to provide certain functionality of our Service. If you choose to
            enable our location features, your location information may be publicly displayed within
            the Service. Please keep in mind that other users can see this information about you,
            and they may use it or disclose it to other individuals or entities outside of our
            control and without your knowledge. Your location information may be subject to abuse,
            misuse, and monitoring by others, so please be careful if you choose to enable location
            functionality. We may also use your location information in an aggregate way, as
            described above in the “Aggregated Personal Data” section.
          </ContentWriting>
        </Section>
        <Section title={'Our Use of Your Personal Data and Other Information'}>
          <ContentWriting>
            Fishbox uses the Personal Data you provide in a manner that is consistent with this
            Privacy Policy. If you provide Personal Data for a certain reason, we may use the
            Personal Data in connection with the reason for which it was provided. Also, if you
            provide Personal Data in order to obtain access to the Services, we will use your
            Personal Data to provide you with access to such services and to monitor your use of
            such services. For instance, we will use your name, mailing address and phone number to
            ensure that such packages are delivered to you.Fishbox and its subsidiaries and
            affiliates (the “Related Companies”) may also use your Personal Data and other
            personally non-identifiable information collected through the Services to help us
            improve the content and functionality of the Services, to better understand our users
            and to improve the Services. Fishbox and its affiliates may use this information to
            contact you in the future to tell you about services we believe will be of interest to
            you. If we do so, each marketing communication we send you will contain instructions
            permitting you to "opt-out" of receiving future marketing communications. In addition,
            if at any time you wish not to receive any future marketing communications or you wish
            to have your name deleted from our mailing lists, please contact us as indicated below.
          </ContentWriting>
        </Section>
        <Section title={'Our Disclosure of Your Personal Data and Other Information'}>
          <ContentWriting>
            Fishbox is not in the business of selling your information. We consider this information
            to be a vital part of our relationship with you. There are, however, certain
            circumstances in which we may share your Personal Data with certain third parties
            without further notice to you, as set forth below:
          </ContentWriting>
        </Section>
        <Section title={'Business Transfers'}>
          <ContentWriting>
            As we develop our business, we might sell or buy businesses or assets. In the event of a
            corporate sale, merger, reorganization, dissolution or similar event, Personal Data may
            be part of the transferred assets.
          </ContentWriting>
        </Section>
        <Section title={'Related Companies'}>
          <ContentWriting>
            We may also share your Personal Data with our Related Companies for purposes consistent
            with this Privacy Policy.
            <VSpace />
            Agents, Consultants and Related Third Parties
            <VSpace />
            Fishbox, like many businesses, sometimes hires other companies to perform certain
            business-related functions. Examples of such functions include mailing information,
            maintaining databases and processing payments. When we employ another entity to perform
            a function of this nature, we only provide them with the information that they need to
            perform their specific function.
          </ContentWriting>
        </Section>
        <Section title={'Legal Requirements'}>
          <ContentWriting>
            Fishbox may disclose your Personal Data if required to do so by law or in the good faith
            belief that such action is necessary to (i) comply with a legal obligation, (ii) protect
            and defend the rights or property of Fishbox, (iii) act in urgent circumstances to
            protect the personal safety of users of the Services or the public, or (iv) protect
            against legal liability.
          </ContentWriting>
        </Section>
        <Section title={'Your Choices'}>
          <ContentWriting>
            You can visit the Site without providing any Personal Data. If you choose not to provide
            any Personal Data, you may not be able to use certain Services.
          </ContentWriting>
        </Section>
        <Section title={'Exclusions'}>
          <ContentWriting>
            This Privacy Policy does not apply to any Personal Data collected by Fishbox other than
            Personal Data collected through the Services. This Privacy Policy shall not apply to any
            unsolicited information you provide to Fishbox through the Services or through any other
            means. This includes, but is not limited to, information posted to any public areas of
            the Services, such as forums, any ideas for new products or modifications to existing
            products, and other unsolicited submissions (collectively, “Unsolicited Information”).
            All Unsolicited Information shall be deemed to be non-confidential and Fishbox shall be
            free to reproduce, use, disclose, and distribute such Unsolicited Information to others
            without limitation or attribution.
          </ContentWriting>
        </Section>
        <Section title={'Children'}>
          <ContentWriting>
            Fishbox does not knowingly collect Personal Data from children under the age of 13. If
            you are under the age of 13, please do not submit any Personal Data through the
            Services. We encourage parents and legal guardians to monitor their children’s Internet
            usage and to help enforce our Privacy Policy by instructing their children never to
            provide Personal Data on the Services without their permission. If you have reason to
            believe that a child under the age of 13 has provided Personal Data to Fishbox through
            the Services, please contact us, and we will endeavor to delete that information from
            our database.
          </ContentWriting>
        </Section>
        <Section title={'Links to Other Web Sites'}>
          <ContentWriting>
            This Privacy Policy applies only to the Services. The Services may contain links to
            other web sites not operated or controlled by Fishbox (the “Third Party Sites”). The
            policies and procedures we described here do not apply to the Third Party Sites. The
            links from the Services do not imply that Fishbox endorses or has reviewed the Third
            Party Sites. We suggest contacting those sites directly for information on their privacy
            policies.
          </ContentWriting>
        </Section>
        <Section title={'Security'}>
          <ContentWriting>
            Fishbox takes reasonable steps to protect the Personal Data provided via the Services
            from loss, misuse, and unauthorized access, disclosure, alteration, or destruction.
            However, no Internet or email transmission is ever fully secure or error free. In
            particular, email sent to or from the Services may not be secure. Therefore, you should
            take special care in deciding what information you send to us via email. Please keep
            this in mind when disclosing any Personal Data to Fishbox via the Internet.
          </ContentWriting>
        </Section>
        <Section title={'Other Terms and Conditions'}>
          <ContentWriting>
            Your access to and use of the Services is subject to the Terms of Service at{' '}
            <AppText href={'TODO Routes.termsOfService.href'} className="underline">
              {' '}
              Terms of Service
            </AppText>
          </ContentWriting>
        </Section>
        <Section title={'Changes to Fishbox’s Privacy Policy'}>
          <ContentWriting>
            The Services and our business may change from time to time. As a result, at times it may
            be necessary for Fishbox to make changes to this Privacy Policy. Fishbox reserves the
            right to update or modify this Privacy Policy at any time and from time to time without
            prior notice. Please review this policy periodically, and especially before you provide
            any Personal Data. This Privacy Policy was last updated on the date indicated above.
            Your continued use of the Services after any changes or revisions to this Privacy Policy
            shall indicate your agreement with the terms of such revised Privacy Policy.
          </ContentWriting>
        </Section>
        <Section title={'Access to Information'}>
          <ContentWriting>
            To keep your Personal Data accurate, current, and complete, please contact us as
            specified below. We will take reasonable steps to update or correct Personal Data in our
            possession that you have previously submitted via the Services.
          </ContentWriting>
        </Section>
        <Section title={'Contacting Fishbox'}>
          <ContentWriting>
            Please also feel free to contact us if you have any questions about Fishbox’s Privacy
            Policy or the information practices of the Services.
            <VSpace />
            You may contact us as follows: {/* TODO */}
            <AppText href="mailto:info@getfishbox.com" className="underline">
              info@getfishbox.com
            </AppText>
          </ContentWriting>
        </Section>
      </ScrollView>
    </SafeFullScreenLayout>
  )
}
