from django.contrib import admin

from targets_app.models import TargetsData, TargetBioLinks, TargetAccountHashtags, TargetFollowersData, TargetFollowingsData, TargetPostsData, TargetPostsContentsData, TargetPostLikesData, TargetPostCommentsData, TargetStoriesData, TargetHighlightsData, TargetHighlightDetailsData

admin.site.register(TargetsData)
admin.site.register(TargetBioLinks)
admin.site.register(TargetAccountHashtags)
admin.site.register(TargetFollowersData)
admin.site.register(TargetFollowingsData)
admin.site.register(TargetPostsData)
admin.site.register(TargetPostsContentsData)
admin.site.register(TargetPostLikesData)
admin.site.register(TargetPostCommentsData)
admin.site.register(TargetStoriesData)
admin.site.register(TargetHighlightsData)
admin.site.register(TargetHighlightDetailsData)
