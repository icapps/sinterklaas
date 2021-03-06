module Fastlane
  module Actions
    class PrepareXcconfigAction < Action
      def self.run(params)
        UI.message "Update Xcconfig"
        scheme_name = params[:scheme_name]
        command = [
          'cp',
          "Configuration/#{scheme_name}.xcconfig",
          'Configuration/Release.xcconfig',
        ].join(' ')

        Actions.sh command
      end

      #####################################################
      # @!group Documentation
      #####################################################

      def self.description
        'Prepare Xconfig.'
      end

      def self.details
        'Prepare Xconfig.'
      end

      def self.available_options
        [
          FastlaneCore::ConfigItem.new(
            key: :scheme_name,
            env_name: 'FL_PREPARE_XCCONFIG_SCHEME_NAME',
            description: 'Define the scheme name',
            is_string: true,
            optional: true,
            default_value: 'Alpha'
          )
        ]
      end

      def self.output
        []
      end

      def self.return_value
      end

      def self.authors
        ["dgyesbreghs"]
      end

      def self.is_supported?(platform)
        platform == :ios
      end
    end
  end
end