'use strict';

angular.module('testyeomanApp')
    .controller('AuditCtrl', function ($scope, $routeParams, $http, $location) {
        $scope.setBodyClass('');
        $scope.auditName = $routeParams.auditName;
        $scope.accessMode = $routeParams.accessMode;
        $scope.isItem = false;
        $scope.msg = "";

        if ($scope.accessMode == 'edit') {
            $http.get($scope.prefixHttp + '/rest/audit/' + $scope.auditName).success(function (data, status) {
                $scope.msg = "";
                $scope.audit = data;
                $scope.debugData = angular.toJson($scope.audit.categories);
                $scope.normalizeDate();
            }).error(function (data, status) {
                    $scope.msg = "Erreur...";
                });
        } else {
            $http.get($scope.prefixHttp + '/rest/template/' + $scope.auditName).success(function (data, status) {
                $scope.msg = "";
                $scope.audit = data;
                $scope.audit.name = 'Fred_' + Math.round(Math.random()*1000000);
                $scope.normalizeDate();
            }).error(function (data, status) {
                    $scope.msg = "Erreur...";
                });
        }

        $scope.normalizeDate = function () {
            $scope.audit.date = convertDateMs($scope.audit.date);
            $scope.audit.lastModif = convertDateMs($scope.audit.lastModif);
        }

        $scope.saveAudit = function() {
            $scope.audit.lastModif = new Date();
//            alert(angular.toJson($scope.audit));
            $http.post($scope.prefixHttp + '/rest/audit/'+$scope.audit.name, angular.toJson($scope.audit)).
                success(function(data, status) {
                    $scope.msg = "Ok";
                    $location.path("/");
                }).
                error(function(data, status) {
                    $scope.msg = "Erreur de sauvegarde...";
//                    $.ajax({
//                        type: 'POST',
//                        url: $scope.prefixHttp + '/rest/audit/'+$scope.audit.name,
//                        crossDomain: true,
//                        data: angular.toJson($scope.audit),
//                        dataType: 'json',
//                        success: function(responseData, textStatus, jqXHR) {
//                            $scope.msg = "OK JQuery...";
//                        },
//                        error: function (responseData, textStatus, errorThrown) {
//                            $scope.msg = "KO JQuery...";
//                        }
//                    });
                });
        }


        //////////////////////////////////////////////////////////////////////////
        // Gestion des items

        $scope.item = {};
        $scope.showItem = function(categIndex, itemIndex) {
            $scope.isItem = true;
//            alert(categIndex +' - '+ itemIndex) ;
            $scope.item = $scope.audit.categories[categIndex].items[itemIndex];
//            alert(angular.toJson($scope.item));
        }

        $scope.okItem = function() {
            $scope.isItem = false;
        }


        $scope.addPhoto = function() {
            $scope.item.photos.push({
                name : 'Nom de la photo',
                comment : 'Commentaire',
                positive : false
            });
        }

        $scope.msg = "";
        $scope.photo = {};
        $scope.takePhoto = function(index) {
            // Take picture using device camera and retrieve image as base64-encoded string
            $scope.msg = "Prise de photo";
            $scope.photo = $scope.item.photos[index];
//            alert("ok" + index + " - " + angular.toJson($scope.photo));
//            $scope.photo.contentBase64 = "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";
            navigator.camera.getPicture($scope.onPhotoSuccess, $scope.onPhotoFailed, { quality: 50,
                destinationType: destinationType.DATA_URL });
//            capturePhoto();
        }

        $scope.onPhotoSuccess = function(imageData) {
            $scope.msg = "";
            $scope.photo.contentBase64 = imageData;
            $scope.$apply();
        }

        $scope.onPhotoFailed = function() {
            $scope.msg = "Erreur dans la prise de la photo";
            $scope.$apply();
        }
    });
