<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\AprilFoolMessage;

class PoppinController extends Controller
{
    public function april() {
        return view('pages.poppin.april')->with([
            'pagetitle' => "April Fool Message"
        ]);
    }

    public function april_save_message(Request $request) {
        $name = $request->input("name");
        $message = $request->input("message");
        $this->validate($request, [
            'name' => 'nullable',
            'message' => 'required'
        ]);
        $msg = new AprilFoolMessage();
        $msg->name = $name;
        $msg->message = $message;
        if($msg->save()) {
            return "accepted";
        } else {
            abort(500);
        }
    }
}
