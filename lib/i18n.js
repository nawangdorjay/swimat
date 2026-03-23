/**
 * i18n strings dictionary for CampusMart.
 * Usage: import { t } from '../../lib/i18n'; then use t('buy_now')
 */
const strings = {
  // Navigation & Brand
  app_name: 'CampusMart',
  tagline: 'Student Marketplace',

  // Hero CTA buttons
  buy_now: 'Buy now',
  sell_now: 'Sell Now',
  start_buying: 'Start Buying',
  start_selling: 'Start Selling',
  create_assignment: 'Create Assignment',

  // Sections
  featured_products: 'Featured Products',
  trending_now: 'Trending Now',
  testimonials_title: 'Real Student Conversations',
  testimonials_subtitle: 'Authentic WhatsApp chats showing genuine student experiences on CampusMart',

  // Trust features
  university_verified: 'University Verified',
  university_verified_desc: 'Verifying college users at the time of registrations.',
  campus_community: 'Campus Community',
  campus_community_desc: 'Trade only with verified students from your college for maximum trust.',
  instant_messaging: 'Instant Messaging',
  instant_messaging_desc: 'Connect with buyers and sellers instantly through our secure messaging system.',

  // CTA section
  cta_title: 'Ready to Start Trading?',
  cta_desc: 'Join your campus community today and discover a smarter way to buy and sell.',

  // Footer
  footer_copyright: '© 2025 CampusMart. All rights reserved.',
  footer_services: 'Services',
  footer_company: 'Company',
  footer_contact: 'Contact',
  footer_description: 'Your trusted campus marketplace for buying, selling, and getting assignment help from verified students.',

  // Common actions
  back_to_home: 'Back to Home',
  view_more: 'View More',
  quick_view: 'Quick View',
};

/**
 * Retrieve a localised string by key.
 * @param {string} key
 * @returns {string}
 */
export const t = (key) => strings[key] ?? key;

export default strings;
