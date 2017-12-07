module Fastlane
  module Actions
    class NpmInstallAction < Action
      def self.run(params)
        UI.message "Update NPM"

        sh "npm install"
      end
    end
  end
end